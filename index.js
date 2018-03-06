// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Imports the Google Cloud client library.
// const Storage = require('@google-cloud/storage');

// // Instantiates a client. Explicitly use service account credentials by
// // specifying the private key file. All clients in google-cloud-node have this
// // helper, see https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/latest/guides/authentication
// const vvision = vision({
//   keyFilename: 'C:\Users\Nico\Documents\GitHub\LabA6-4235\Lab6-4235-0fe62e6b33ea.json'
// });


// Performs label detection on the image file
client
  .labelDetection('./photo/1.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
