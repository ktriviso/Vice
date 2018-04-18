const express = require('express');
const controller = require('../controllers/dbController.js');
const viewsController = require('../controllers/viewsController.js');

const router = express.Router();

// router.route('/id')
//     .get(controller.show, viewsController.showOne)

router.route('/')
    .get(controller.index, viewsController.showAll)

module.exports = router;
