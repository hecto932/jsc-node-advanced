const fs = require('fs');

fs.copyFile('naranja.txt', 'limon.txt', (err) => {
  if (err) return console.error(err);

  console.log('Copied!');
});
