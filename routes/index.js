var express = require('express');
var router = express.Router();
var request = require('request');
var cloudscraper = require('cloudscraper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Website' });
});

router.post('/', function (req, res) {
  var website = req.body.title;
  // request.get(website).on('error', function(err) {
  //     console.log(err);
  // }).pipe(res);
  cloudscraper.get(website, function(error, response, body) {
    if (error) {
      console.log('Error occurred');
    } else {
      res.send(body);
    }
  });
  
});

module.exports = router;
