const request = require('request');
let args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, function(err, res, body) {
  if (err) console.log(err.message);
  else {
    const data = JSON.parse(body);
    if (data[0]) console.log(data[0].description);
    else console.log('Mentioned breed not found!');
  }
});