//Load packages
var express = require('express'),
    app     = express(),
    path    = require('path');

//send our index.html file to the user for the home page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

//start the server
app.listen(1337);
console.log("Listening on 1337");

// login routes
app.route('/login')

  .get(function(req,res){
    res.send('this is the login form');
  })

  .post(function(req, res){
    console.log('processing');
    res.send('processing the login form!');
  });

var adminRouter = express.Router();

//route middleware that will happen on every request
adminRouter.use(function(req, res, next){
  console.log(req.method, req.url);

  next();

})
//admin main page. The dashboard
adminRouter.get('/', function(req, res){
  res.send('I am the dashboard!');
});

//users page
adminRouter.get('/users', function(req, res){
  res.send('I show all the users!');
});
adminRouter.get('/users/:name', function(req,res){
  res.send('hello ' + req.params.name + '!');
});
//posts page
adminRouter.get('/posts', function(req, res){
  res.send('I show all the posts');
});

// apply the routes
app.use('/admin', adminRouter);
