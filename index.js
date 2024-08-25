const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        // Check if the alphabet is lowercase and if it is the highest one
        if (
          item === item.toLowerCase() &&
          (!highest_lowercase_alphabet ||
            item > highest_lowercase_alphabet)
        ) {
          highest_lowercase_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "sanhita17",  // Replace with dynamic user_id if needed
      email: "sanhita.kundu2020@vitstudent.ac.in",  // Replace with dynamic email if needed
      roll_number: "20BEC0215",  // Replace with dynamic roll number if needed
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet
        ? [highest_lowercase_alphabet]
        : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
