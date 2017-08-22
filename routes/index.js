var express = require('express');
var router = express.Router();


/* Main Pages */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spencer Lanoue', description: 'My personal site where I track what I\'m reading and learning'});
});

router.get('/now', function(req, res, next) {
  res.render('now', { title: 'What I\'m doing now', description: 'Here\'s what I\'m currently working on now'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', description: 'Projects I\'m currently working on'});
});

/* Project Pages */

router.get('/reading', function(req, res, next) {
  res.render('reading', { title: 'What I\'m Reading', description: 'A list of all the books I\'ve read'});
});

router.get('/recommended', function(req, res, next) {
  res.render('recommended', { title: 'Recommended Books', description: 'A list of the books that have had an outsized impact on my thinking in life and business'});
});

router.get('/best', function(req, res, next) {
  res.render('best', { title: 'The Best Things I\'ve Read, Watched and Listened To', description: 'These are the things that have provoked in me a great deal of thought and feeling, and I can highly recommend you explore them too.'});
});

router.get('/code', function(req, res, next) {
  res.render('code', { title: 'Code', description: 'The hand-crafted JavaScript code that makes this site'});
});

router.get('/guest', function(req, res, next) {
  res.render('guest', { title: 'Guest posts', description: 'Articles I\'ve written wrote for Fast Company, Entrepreneur, and more'});
});

/* Articles */

router.get('/next', function(req, res, next) {
  res.render('next', { title: 'What should I read next? The resources I use to find great books', description: 'These resources that have helped me find almost every book that\’s had a meaningful impact on my thinking in business and life.'});
});


/* EXPORT this file as a module that can be used in other files */

module.exports = router;
