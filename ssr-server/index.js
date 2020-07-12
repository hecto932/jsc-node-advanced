const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');

const { config } = require('./config');

const app = express();

// body parser
app.use(express.json());
app.use(cookieParser());

// BASIC STRATEGIES
require('./utils/auth/strategies/basic');

app.post('/auth/sign-in', async function (req, res, next) {
  passport.authenticate('basic', function (err, data) {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      req.login(data, { session: false }, async function (err) {
        if (err) {
          next(err);
        }
        const { user, token } = data;
        res.cookie('token', token, {
          httpOnly: !config.dev,
          secure: !config.dev,
        });

        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  });
});

app.post('/auth/sign-up', async function (req, res, next) {
  const { body: user } = req;

  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: 'POST',
      data: user,
    });

    res.status(201).json({ message: 'user created' });
  } catch (err) {
    next(err);
  }
});

app.get('/movies', async function (req, res, next) {});

app.post('/user-movies', async function (req, res, next) {});

app.delete('/user-movies/:userMovieId', async function (req, res, next) {});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
