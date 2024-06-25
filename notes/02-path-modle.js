const path = require("path");

console.log("__dirname", __dirname);
console.log("__filename", __filename);

// console.log("__dirname", path.basename(__dirname));
// console.log("__filename", path.basename(__filename));

// console.log("path.delimiter", path.delimiter);

// console.log("__dirname", path.isAbsolute(__dirname));
// console.log("__filename", path.isAbsolute("./app.js"));

// console.log("__dirname", path.format(path.parse(__filename)));
// console.log("__dirname", path.format(path.parse(__dirname)));

// console.log(
//   "join",
//   path.join(__dirname, "../folderOne", "folderTwo", "one.jpg")
// );

// console.log("resolve", path.resolve("/folderOne", "/folderTwo", "one.jpg"));

// console.log("extname", path.extname(__filename));
// console.log("extname", path.extname(__dirname));

// console.log("__filename", path.basename(path.dirname(__filename)));
// console.log("__dirname", path.basename(path.dirname(__dirname)));

// console.log(
//   "relativePath",
//   path.relative(
//     path.join(__filename, "folderOne", "folderTwo"),
//     path.join(__filename, "notes")
//   )
// );

console.log("win32", path.win32);
