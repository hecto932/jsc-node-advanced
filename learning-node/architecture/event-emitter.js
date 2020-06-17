const eventEmitter = require('events');

class Logger extends eventEmitter {
  execute(cb) {
    console.log('Before');
    this.emit('start');
    cb();
    this.emit('finish');
    console.log('After');
  }
}

const logger = new Logger();

logger.on('start', function () {
  console.log('Starting');
});

logger.on('finish', function () {
  console.log('Finishing');
});
logger.on('finish', function () {
  console.log('Finishing 2');
});

// logger.execute(() => console.log('hello world!'));
logger.execute(() => setTimeout(() => console.log('hello world'), 500));
