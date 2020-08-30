var express = require('express');
var router = express.Router();
const logs = require('../models/logs');

/* GET home page. */
router.get('/', function(req, res, next) {
  const log = {
    timestamp: new Date(),
    level: 'DEBUG',
    content: '테스트 로그'
  };

  logs.create(log)
      .then(() => {
        res.send('This is Express!!');
        next();
      });
});

module.exports = router;
