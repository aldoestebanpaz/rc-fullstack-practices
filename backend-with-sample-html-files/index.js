const express = require("express");
const path = require("path");

const app1 = express();

const usersSampleData = [
  {
    name: "aldo1"
  },
  {
    name: "aldo2"
  },
  {
    name: "aldo3"
  }
];

app1.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/index.html")));

app1.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname + "/about.html")));

app1.get("/api/v1/users", (req, res) =>
  res.json(usersSampleData)
)

app1.listen(8080, () => {
  console.log("app running!")
});
