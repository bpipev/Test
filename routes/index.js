var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  website = req.body.title;
  website_data = request.get(website).on('error', function(err) {
      console.log(err)
  }).pipe(res);
});

module.exports = router;
