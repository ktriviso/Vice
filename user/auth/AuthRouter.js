const authRouter = require('express').Router();
const AuthService = require('./AuthService');
const ViewController = require('../UserViewController');

authRouter.route('/login')
    .get(ViewController.login)

module.exports = authRouter;
