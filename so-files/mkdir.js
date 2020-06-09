const fs = require('fs');

fs.mkdir('platzi/js-school/node', { recursive: true }, (err) => {
  if (err) return console.error(err);

  console.log('Created!');
});
