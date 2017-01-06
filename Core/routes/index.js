var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DashBoard' });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Chat' });
});

router.get('/agenda', function(req, res, next) {
  res.render('agenda', { title: 'Agenda' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
