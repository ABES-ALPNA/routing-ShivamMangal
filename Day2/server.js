const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>This is my first server</h1>");

  res.end("");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
