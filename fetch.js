// Działa to na starszej wersji node-fetch@2

// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

// Jak ustalić argumenty w node.js
// 1. process.argv - tablica z argumentami
// 2. process.argv[0] - ścieżka do node.exe
// 3. process.argv[1] - ścieżka do pliku js
// 4. process.argv[2] - pierwszy argument
// 5. process.argv[3] - drugi argument
// const year = process.argv[2] || '2025'; // jeśli nie podano roku, to domyślnie 2000


// fetch(url)
//     .then(res => console.log(res))
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

// Drugi sposób importu fetch w nowszych wersjach node.js
// (od wersji 18 fetch jest wbudowany w node.js)
// import fetch from 'node-fetch';

// const fetch = require('node-fetch');

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
  .catch(error => console.log("Errroororor", error))
