const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    return res.status(401).json({ maessage: 'Not Authorized' })
}

module.exports = checkAuthenticated;