const express = require('express');
const controller = require('../controllers/dbController.js');
const views = require('../controllers/viewsController.js');

const router = express.Router();

router.route('/database/single/:id/edit')
    .get(controller.show, views.showEditForm)

router.route('/database/single/:id')
    .get(controller.show, views.showOne)
    .put(controller.update, views.handleUpdate)
    .delete(controller.destroy, views.handleDelete)

router.route('/database')
    .get(controller.index, views.showAll)
    .post(controller.create, controller.createReference, views.handleCreate)

router.get('/new', views.showAddForm)

router.route('/login')
    .get(views.showLoginForm)
    .post(controller.login, views.handleCreateUser)

router.get('/logout', controller.logout, views.handleLogout,);

router.route('/register')
    .get(views.showRegisterForm)
    .post(controller.newUser, views.handleCreateUser)

router.route('/')
    .get(controller.data, views.showArticle)

module.exports = router;
