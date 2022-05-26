const fs = require("fs-extra");

const copyf = (s, d) => {
  const src = `./data`;
  const dest = `./data`;
  fs.copySync(src + s, dest + d);
};
module.exports = copyf;
