const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      cb(null, 'hello world!');
    } else {
      cb(new Error('hello error!'));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.log(`Error`, err);
  } else {
    console.log('message', msg);
  }
});
