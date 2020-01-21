//basic imports for nodejs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//creating instances for modules
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());



app.listen(3000, function(){
  console.log('dtoolz rock!');
});