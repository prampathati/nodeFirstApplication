var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var jwtdecode = require('jwt-decode')

router.post('/',(req,res,next)=>{



var secretValue = 'Pav@12345'
//Generate the token
const token = jwt.sign({id:'12345',aud:'pavan'},secretValue,{ algorithm: 'HS256', expiresIn:Math.floor(Date.now() / 1000) + (60 * 60)});
console.log('Token Id Is :-' + token);
//Verify the token
jwt.verify(token,secretValue,{audience:'pavan',algorithms:['HS256']},function(err,decoded){
    if(err){
        console.log('Error From Token :-' , err)
    }
   console.log('Decoded :: ' , decoded)
}) 
var jsonData = [
    {
        name : 'john',
        location : 'mumbai',
        token : token
    }
]
//Decode the data
/* const tkn = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1IiwiYXVkIjoicGF2YW4iLCJpYXQiOjE2NTAzNTIzMDQsImV4cCI6MzMwMDcwODIwOH0.-B8-P3bTANLoKHWSmo_HV-b74dY1X4ekLmFIMLSNUSU';
const decodetkn = jwtdecode(tkn);
console.log('Decoded Token : -' , decodetkn) */



res.send(jsonData,{
},(200))
})
module.exports = router