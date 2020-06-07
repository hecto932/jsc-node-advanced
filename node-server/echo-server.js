const http = require('http');
const server = http.createServer();

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// DATE MUST BE IN FORMAT YYYY/MM/DD
server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == '/echo') {
    let body = [];

    req
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        body = Buffer.concat(body).toString();
        const getDayNumber = new Date(body).getDay();
        console.log(new Date(body), getDayNumber, weekDays[getDayNumber]);
        res.end(weekDays[getDayNumber]);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found!');
  }
});

server.listen(8001);
console.log('Server listening on http://localhost:8001');
