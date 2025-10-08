const express = require("express");
const app = express();
app.use(express.json());

let books = [];
let nextId = 1;

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  const newBook = { id: nextId++, title, author, year, status: "available" };
  books.push(newBook);
  res.json(newBook);
});

app.put("/books/:id/issue", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");
  book.status = "issued";
  res.json(book);
});

app.put("/books/:id/return", (req, res) => {
  const book = books.find(b => b.id == req.params.id)
  if (!book) return res.status(404).send("Book not found");
  book.status = "available";
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.send("Book deleted");
});

app.listen(3000, () => console.log("Server running on port 3000"));
