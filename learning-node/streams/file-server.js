const fs = require('fs');

const server = require('http').createServer();

server.on('request', function (req, res) {
  fs.readFile('./big', (err, data) => {
    if (err) {
      return console.error(error);
    }

    res.end(data);
  });
});

server.listen(3000);
