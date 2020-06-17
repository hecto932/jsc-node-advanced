// console.log('A %s and %s', 'perrito', 'gatito');

// console.info('hello world');
// console.warn('hello error');

// console.assert(42 === '42');
// console.assert(42 == '42');

// console.trace('hello');

const util = require('util');
const debugLog = util.debuglog('foo');

debugLog('Hello from too');
