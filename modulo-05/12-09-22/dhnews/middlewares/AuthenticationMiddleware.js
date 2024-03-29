const AuthorizeAccess = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    next();
}

module.exports = AuthorizeAccess;