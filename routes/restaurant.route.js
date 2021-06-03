const express = require('express');
const router = express.Router();
const restController = require('../controllers/restaurant.contr');

router
    .post('/create', restController.createRest)
    .put('/update/:id/:menu/:dish', restController.updateMenu)
    .get('/getAll', restController.getRests)
    .get('/getRest/:slug', restController.getRest)

module.exports = router;