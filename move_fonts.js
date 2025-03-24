var fs = require("fs");

const fonts = [
  "material-symbols-outlined.woff2",
  "material-symbols-rounded.woff2",
  "material-symbols-sharp.woff2",
];

const source = "./node_modules/material-symbols/";
const dest = "./";

for (let index = 0; index < fonts.length; index++) {
  console.log(source + fonts[index]);
  console.log(dest + fonts[index]);
  fs.copyFile(source + fonts[index], dest + fonts[index], (err) => {
    if (err) throw err;
    console.log("fonts[i] copied to destination");
  });
}
