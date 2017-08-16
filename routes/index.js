var express = require('express');
var router = express.Router();


/* GET pages */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spencer Lanoue', description: 'My personal site where I track what I\'m reading and learning'});
});

router.get('/reading', function(req, res, next) {
  res.render('reading', { title: 'Books I\'ve Read', description: 'A list of all the books I\'ve read'});
});

router.get('/recommended-books', function(req, res, next) {
  res.render('recommended-books', { title: 'Recommended Books', description: 'A list of the books that have had an outsized impact on my thinking in life and business'});
});

router.get('/best-things', function(req, res, next) {
  res.render('best-things', { title: 'The Best Things I\'ve Read, Watched and Listened To', description: 'These are the things that have provoked in me a great deal of thought and feeling, and I can highly recommend you explore them too.'});
});

router.get('/what-should-i-read-next', function(req, res, next) {
  res.render('what-should-i-read-next', { title: 'What Should I Read Next?', description: 'Here are all the resources I use to find what book to read next'});
});

router.get('/reading-lists', function(req, res, next) {
  res.render('reading-lists', { title: 'Reading Lists', description: 'A distillation of the best books I read each year'});
});

router.get('/now', function(req, res, next) {
  res.render('now', { title: 'What I\'m doing now', description: 'Here\'s what I\'m currently working on now'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', description: 'Projects I\'m currently working on'});
});

router.get('/code', function(req, res, next) {
  res.render('code', { title: 'Code', description: 'The hand-crafted JavaScript code that makes this site'});
});

router.get('/guestposts', function(req, res, next) {
  res.render('guestposts', { title: 'Guest posts', description: 'Articles I wrote for Fast Company, Entrepreneur.com, Buffer, KissMetrics, UserTesting, and more'});
});

/* EXPORT this file as a module that can be used in other files */

module.exports = router;
