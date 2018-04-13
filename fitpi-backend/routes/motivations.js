var express = require('express');
var router = express.Router();
var motivation = require('../models/motivation')

/* GET motivations listing. */
router.get('/', function(req, res, next) {

  motivation.all(function(err, motivationList) {
    res.json(motivationList);
  })

})

module.exports = router;
