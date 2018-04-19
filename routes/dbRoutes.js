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
    // .post route to recieve the ajax
    .post(controller.create, views.handleCreate)

router.get('/new', views.showAddForm);

router.route('/')
    .get(controller.data, views.showArticle)
    // no post, youre adding to the db, not home page

module.exports = router;
