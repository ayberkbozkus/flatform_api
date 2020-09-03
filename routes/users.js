var express = require('express');
var router = express.Router();

const users = [/*{"email":"ayberk.bozkus@gmail.com","password":"ayberk@flatform2020!"},
{"email":"altanckr@googlemail.com","password":"altan@flatform2020!"},
{"email":"faruk.deniz@farplas.com","password":"faruk@flatform2020!"},
{"email":"dogukan.nefis@farplas.com","password":"dogukan@flatform2020!"},
{"email":"onur@fplus.ventures","password":"onur@flatform2020!"},
{"email":"alp.kiziltan@farplas.com","password":"alp@flatform2020!"},
{"email":"o.akin@farplas.com","password":"ozgun@flatform2020!"}*/];

const ticket = [];

const notification = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(ticket);
});

router.get('/notification', function(req, res, next) {
  res.send({ notification });
});

router.post('/login', function(req, res, next) {
  const { email, password } = req.body;
  if (email == "flatform@flatform.com" && password == "flatform@flatform2020!") {
    res.send({ "login":"2314" });
  }
  else{
    res.send({ "fail":"9845" });
  }
});

router.post('/ticket', function(req, res, next) {
  const { email, issue, message, color } = req.body;
  ticket.push({ email, issue, message, color });
  res.send({ success: true });
});

router.post('/notification', function(req, res, next) {
  const { email, title, message, color } = req.body;
  notification.push({ email, title, message, color });
  res.send({ success: true });
});

module.exports = router;
