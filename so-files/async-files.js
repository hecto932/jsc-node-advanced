const fs = require('fs');

const file = process.argv[2];

if (!file) {
  throw new Error('You must specify the file');
}

const content = fs.readFile(file, function (err, content) {
  if (err) {
    return console.error(err);
  }

  console.log(content.toString().split('\n').length);
});
