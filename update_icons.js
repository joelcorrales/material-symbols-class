const fs = require("fs");
const path = require("path");

// Config
const dependencyName = "material-symbols";

// Paths
const tsFilePath = path.resolve(`node_modules/${dependencyName}/index.d.ts`);
const scssFilePath = path.resolve("./material-symbols.scss");
const pkgPath = path.resolve("./package.json");

// 1. Read and extract icons list from TS file
const tsFileContent = fs.readFileSync(tsFilePath, "utf8");

const match = tsFileContent.match(/type\s+MaterialSymbols\s*=\s*\[([\s\S]*?)\];/);
if (!match) {
  console.error("Could not find MaterialSymbols array in TypeScript file.");
  process.exit(1);
}

let iconsListRaw = match[1]
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean) // remove empty lines
  .map(line => line.replace(/,$/, "")) // remove trailing commas
  .map(line => line.replace(/"/g, "")) // remove quotes
  .filter(Boolean);

// 2. Create the SCSS $icons list string
const newIconsScss = `$icons:\n  "${iconsListRaw.join('",\n  "')}";`;

// 3. Update SCSS file
let scssContent = fs.readFileSync(scssFilePath, "utf8");
scssContent = scssContent.replace(/\$icons:\s*[\s\S]*?;/, newIconsScss);
fs.writeFileSync(scssFilePath, scssContent, "utf8");

console.log(`✅ Updated ${scssFilePath} with ${iconsListRaw.length} icons.`);

// 4. Update package.json version to match dependency version
const depPkgPath = path.resolve(`node_modules/${dependencyName}/package.json`);
const depVersion = require(depPkgPath).version;

const pkg = require(pkgPath);
pkg.version = depVersion;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8");

console.log(`✅ Updated ${pkgPath} version to ${depVersion} (from ${dependencyName}).`);
