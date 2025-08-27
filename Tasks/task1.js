// create a program that writes "Hello Node.js" into a file called hello.txt then read the content of the file and print in the console

// Finall,append - "practice makes perfect!" to the same File.


const fs = require("fs");

fs.writeFile("hello.txt", "Hello Node.js\n", (err) => {
  if (err) throw err;

  fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);

    fs.appendFile("hello.txt", "practice makes perfect!\n", (err) => {
      if (err) throw err;
      console.log("Text appended!");
    });
  });
});
