const { resolve } = require("path");
const { ESLint } = require("eslint");

const eslint = new ESLint();

module.exports = {
  "**/*.{js,jsx,ts,tsx,json}": (fileNames) => {
    const escapedFileNames = fileNames
      .map((fileName) => escape(fileName))
      // .map(fileName => (isWin ? fileName : escape([fileName]))) // * architecture check
      .join(" ");

    // * console.log("escapedFileNames: ", escapedFileNames);

    return [
      `prettier --with-node-modules --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${fileNames
        .filter((f) => !eslint.isPathIgnored(f))
        .map((f) => `"${f}"`)
        .join(" ")}`,
      `git add ${escapedFileNames}`,
    ];
  },
};

function escape(str) {
  const escaped = resolve(str);
  return escaped;
}
