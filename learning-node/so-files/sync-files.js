const fs = require('fs');

try {
  const file = process.argv[2];
  const content = fs.readFileSync(file).toString();

  const lines = content.split('\n').length;
  console.log(lines);
} catch (err) {
  return console.log(err);
}
