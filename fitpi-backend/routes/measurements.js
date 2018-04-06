var express = require('express');
var router = express.Router();
var measurement = require('../models/measurement')

/* GET measurements listing. */
router.get('/', function(req, res, next) {

    measurement.all(function(err, list) {
    res.json(list);
  })

})

module.exports = router;
