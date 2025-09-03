// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

// Jak ustalić argumenty w node.js
// 1. process.argv - tablica z argumentami
// 2. process.argv[0] - ścieżka do node.exe
// 3. process.argv[1] - ścieżka do pliku js
// 4. process.argv[2] - pierwszy argument
// 5. process.argv[3] - drugi argument
const year = process.argv[2] || '2025'; // jeśli nie podano roku, to domyślnie 2000
const url = `http://numbersapi.com/${year}/year?json`;

console.log(year);
console.log(url);