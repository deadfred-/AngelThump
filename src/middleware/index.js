'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const auth = require('feathers-authentication');
const path = require('path');

const signup = require('./signup');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this;

  app.set('views', 'public');
  
  app.get('/dmca', function(req, res, next){
    res.sendFile('dmca.html', { root: path.join(__dirname, '../../public') });
  });
  app.get('/privacy', function(req, res, next){
    res.sendFile('privacy.html', { root: path.join(__dirname, '../../public') });
  });
  app.get('/tos', function(req, res, next){
    res.sendFile('tos.html', { root: path.join(__dirname, '../../public') });
  });
  app.get('/profile', function(req, res, next){
    res.sendFile('profile.html', { root: path.join(__dirname, '../../public') });
  });
  app.get('/login', function(req, res, next){
    res.sendFile('login.html', { root: path.join(__dirname, '../../public') });
  });
  app.get('/signup', function(req, res, next){
    res.sendFile('signup.html', { root: path.join(__dirname, '../../public') });
  });

  app.post('/login', auth.express.authenticate('local', { successRedirect: '/profile', failureRedirect: '/login' }));
  app.post('/signup', signup(app));

  app.use(notFound());
  app.use(handler());
};
