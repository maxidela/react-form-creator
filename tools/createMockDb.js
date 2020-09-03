/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { forms, fields } = mockData;
const data = JSON.stringify({ forms, fields });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
