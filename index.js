// type 'node index.js' to start
//To adjust code, change value of variable 'fileName' to desired path to image location stored locally

'use-strict'

var express = require('express');
//instance of express
var app = express();
var bodyParser = require('body-parser')

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//direct to homepage
app.get('/', function(req,res){
  // var json_code = {':'}
  res.render('pages/homepage')
})

//listen request
app.listen(process.env.PORT||3000,function(){
   console.log('Local Host running on Port 3000, CTRL+C to end');
});

//Obtained from Google Documentation
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * Change fileName to desired image path
 */
 const fileName = './photo/4.jpg';

// Performs label detection on the local file
client
  .labelDetection(fileName)
  .then(results => {
    const labels = results[0].labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
