const express = require("express");
const app = express();

app.use(express.json());

app.post("/add/user", (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: "User added successfully",
    user: { name, age }
  });
});


app.listen(3000, () => {
  console.log("Server running.......");
});