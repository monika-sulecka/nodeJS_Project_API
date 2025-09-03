// Działa to na starszej wersji node-fetch@2

// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

const year = process.argv[2] || Math.floor(Math.random() * 2020);
const url = `http://numbersapi.com/${year}/year?json`;

console.log(year);
console.log(url);

fetch(`http://numbersapi.com/${year}/year?json`)
  .then(response => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
})
  .then(data => console.log(data.text))
  .catch(error => console.log("You fail...", error))
