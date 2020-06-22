const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFound = require('./utils/middleware/notFoundHandler');

// Body parser
app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFound);

// Errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${config.port}`);
});
