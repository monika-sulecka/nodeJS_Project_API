// Działa to na starszej wersji node-fetch@2
const request = require('request');

// 'https://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json'

const validCodes = ['usd', 'eur', 'chf', 'gbp', 'jpy'];

const code = (process.argv[2] || 'usd').toLowerCase();

const url = `https://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;

console.log(url)