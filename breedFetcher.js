const request = require('request');
const arg = process.argv.splice(2);

const website = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(website + arg, function(error, response, body) {
  console.log('Error:', error);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('Website Body:', body);
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log('Cat Not Found');
  }
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
  
});


