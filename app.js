// Działa to na starszej wersji node-fetch@2
const request = require('request');

// 'https://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json'

const validCodes = ['usd', 'eur', 'chf', 'gbp', 'jpy'];

const code = (process.argv[2] || 'usd').toLowerCase();

const isValid = validCodes.find(currency => currency === code) ?true : undefined

if (!isValid) {
    console.log('Nieprawidłowy kod waluty. Dozwolone kody to: ', validCodes.join(', '));
    process.exit();
}
console.log(isValid)

const url = `https://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;

// console.log(url)

request(url, {json:true}, (err, res, body) => {
    if (err) {
        console.log('Błąd: ', err);
        process.exit();
    } else if (res.statusCode !== 200) {
        console.log('Coś poszło nie tak. Status: ', res.statusCode);
        process.exit();
    }
    console.log(`Kurs ${body.code} z dnia ${body.rates[0].effectiveDate} to ${body.rates[0].mid} PLN`);
})