const passport = require("passport");

const home = (req, res) => {
  return res.status(200).json({
    name: pckg.name,
    version: pckg.version,
    author: pckg.author,
  });
};

module.exports = home;
