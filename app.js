//basic imports for nodejs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//creating instances for modules
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


//making a get request to date values in json
app.get('/dateAccess/:dateValue', function(req,res,next){
    //make request data for date
    var dateValue = req.params.dateValue;
    // from javascript to localeDateString docs, to format date output
    var dateFormatOptions = {
     year:'numeric',
     month:'long',
     day:'numeric'
    };

     if(isNaN(dateValue)){//when params is a string
         var actualDate = new Date(dateValue);
         actualDate = actualDate.toLocaleDateString('en-us', dateFormatOptions);
         var unixDate = new Date(dateValue).getTime()/1000;
     } else {//when params is actually a number
       var unixDate = dateValue;
       var actualDate = new Date(dateValue * 1000);
       actualDate = actualDate.toLocaleDateString('en-us', dateFormatOptions);
     }

    res.json({unix: unixDate, actual: actualDate});
});


app.listen(3000, function(){
  console.log('dtoolz rock!');
});