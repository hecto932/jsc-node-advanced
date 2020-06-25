const { config } = require('../config');

function cacheResponse(res, seconds) {
  if (!config.dev) {
    res.set('Cance-Control', `public, max-age=${seconds}`);
  }
}

module.exports = cacheResponse;
