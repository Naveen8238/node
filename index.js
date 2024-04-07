// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extendname
// console.log(path.extname(filePath));
// const path = require("path");
// const fs = require("fs");
// const filePath = "sample.txt";
// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log("something went Wrong", err);
//   } else {
//     console.log(data);
//   }
// });

const express = require("express");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});
app.get("/users", (req, res) => {
  res.json({ message: "Get all the users" });
});
app.get("/users/:id", (req, res) => {
  res.json({ message: "Get all the with id" });
});

app.listen(PORT, () => {
  console.log(`server listen at ${PORT}`);
});
