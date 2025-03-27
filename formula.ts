const maxScreenWidth = 2035;
const minScreenWidth = 375;
const objMaxWidth = 122;
const objMinWidth = 100;

const resultA = (objMaxWidth - objMinWidth) / (maxScreenWidth - minScreenWidth);
const resultB = objMaxWidth - resultA * maxScreenWidth;

console.log(
  "--sh-" +
    objMaxWidth +
    "-" +
    objMinWidth +
    ": calc(" +
    (resultA * 100).toFixed(2) +
    "vw + " +
    resultB.toFixed(2) +
    "px);"
);
