var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    var employeeGetData =[
                        {
                            id : 102,
                            name : 'Ashok',
                            age : 24,
                            address : 'Hyderabad'
                            },
                            {
                            id : 103,
                            name : 'Praveen',
                            age : 24,
                            address : 'Chennai'
                            },
                            {
                            id : 104,
                            name : 'Prashanth',
                            age : 24,
                            address : 'Mumbai'
                            },
                            {
                            id : 105,
                            name : 'Suresh',
                            age : 24,
                            address : 'Bangalore'
                            },
                            {
                            id : 106,
                            name : 'Sivakumar',
                            age : 24,
                            address : 'Pune'
                            },
                            {
                            id : 107,
                            name : 'Mani',
                            age : 24,
                            address : 'Kolkata'
                            }
                      ]  
        var data = employeeGetData;
        res.send(JSON.stringify(data));                 
});
module.exports = router;