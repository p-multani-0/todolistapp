const signOut = (req, res) => {
    req.logOut()
    return res.status(200).json({ message: 'Logged Out' })
}

module.exports = signOut;