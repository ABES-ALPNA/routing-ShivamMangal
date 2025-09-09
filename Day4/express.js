const express = require("express");
const app = express();
const data = require("./data");

app.use(express.json());

app.get("/users", (req, res) => {
  //   res.send(data.user);
  res.json({
    message: "data successfully",
    data: data.user,
    time: new Date().toLocaleString(),
  });
});

app.post("/users", (req, res) => {
  const data1 = req.body;
  data.user.push(data1);

  res.json({
    message: "data successfully",
    data: data1,
    time: new Date().toLocaleString(),
  });
});
app.listen("3000", () => {
  console.log("server started");
});