const express = require('express');
const app = express();

app.get('/square/:number', (req, res) => {
  const num = parseInt(req.params.number);
  const square = num * num;

  res.send(`Square of ${num} is ${square}`);
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
