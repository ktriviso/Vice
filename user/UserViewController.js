module.exports = {

    showLoginForm(req, res) {
        res.render('auth/login');
    },

    showRegisterForm(req, res) {
        res.render('auth/register');
    },

    handleCreateUser(req, res) {
        res.redirect('/login');
    }

    handleLogout(req, res) {
        res.redirect('/login');
    },
    handleDelete(req, res) {
        res.redirect('/login');
    },
};
