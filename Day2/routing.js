const server = require("http");
server
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("this is my first page ");
    } else {
      if (req.url == "/about") {
        res.write("this ia about page");
      } else if (req.url === "/contact") {
        res.write("this is contact page");
      } else {
        res.write("404 not found");
      }
    }
  })
  .listen(4000, () => {
    console.log("server started");
  });