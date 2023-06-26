var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')


const token = process.env.GITHUB_TOKEN

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
