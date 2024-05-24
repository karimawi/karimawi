const fs = require('fs');
const path = './README.md';
const year = new Date().getFullYear();
const age = year - 2004;
fs.readFile(path, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/👨🏻‍💻 I'm a \d{2}-year old/g, `👨🏻‍💻 I'm a ${age}-year old`);
  fs.writeFile(path, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
