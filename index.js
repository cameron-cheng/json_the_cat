const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.splice(2);

fetchBreedDescription(breedName, function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});