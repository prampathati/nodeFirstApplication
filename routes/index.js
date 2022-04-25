var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Id/:id/Name/:name/Email/:email', function(req, res, next) {
  //console.log(req.query)
   res.send({
    id : req.params.id,
    name : req.params.name,
    email : req.params.email
  }); 
});

module.exports = router;
