var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function (req, res) {
    res.render('result', {
        description: req.body.description,
        agree: req.body.agree,
        animals: req.body.animals,
        animalsOther: req.body.animalsOther,
    })

})


module.exports = router;