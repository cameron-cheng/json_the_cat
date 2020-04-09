const request = require('request');



const fetchBreedDescription = function(breedName, callBack) {

  const website = 'https://api.thecatapi.com/v1/breeds/search?q=';
 

  request(website + breedName, function(error, response, body) {
    if (error) {
      callBack('Cat Not Found', null);
    } else {
      const data = JSON.parse(body);
      callBack(null, data[0].description);
    }

  });
};


module.exports = { fetchBreedDescription };