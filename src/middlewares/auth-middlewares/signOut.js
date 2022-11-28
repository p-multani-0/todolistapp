const signOut = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  return res.status(200).json({ message: "Logged Out" });
};

module.exports = signOut;
