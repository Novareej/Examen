var express = require('express');
var router = express.Router();
var Movies = require('../movies_reduit.json');


/* GET movies listing. */
router.get('/', function (req, res, next) {
    res.json(Movies);
});



//let obj = JSON.parse(Movies);
//console.log(obj[0]["id"]);
    
module.exports = router;
