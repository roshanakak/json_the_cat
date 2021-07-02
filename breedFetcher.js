const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(err, res, body) {
    if (err) {
      callback(`Failure: ${err}`, null);
    } else {
      const data = JSON.parse(body);
      if (data[0]) callback(null, data[0].description);
      else callback(`Mentioned breed: ${breedName} not found!`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
