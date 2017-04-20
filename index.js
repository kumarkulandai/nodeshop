var express = require('express');
var app = express();
var path = require('path');
var expressHbs = require('express3-handlebars');

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.use('/media', express.static(path.join(__dirname, '/media')));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/bra', function(req, res){
  var products = [
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Red Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Green Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'White Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Yellow Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Stapless Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Wired Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Non Wired Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Plain Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Cotton Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Black Bra', price: '299',image : '/media/images/whitebra.jpg'}
  ];

  var sizes = [
    'Small', 'Medium', 'Large'
  ];

  var data = {
    products: products,
    sizes: sizes
  };

  res.render('bra', data);
});

app.get('/panty', function(req, res){
  var products = [
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Red Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Green Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'White Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Yellow Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Stapless Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Wired Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Non Wired Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Plain Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Cotton Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Black Bra', price: '299',image : '/media/images/whitebra.jpg'}
  ];

  var sizes = [
    'Small', 'Medium', 'Large'
  ];

  var data = {
    products: products,
    sizes: sizes
  };

  res.render('panty', data);
});

app.get('/sets', function(req, res){
  var products = [
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Red Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Green Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'White Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Yellow Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Stapless Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Wired Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Non Wired Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Plain Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Cotton Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Black Bra', price: '299',image : '/media/images/whitebra.jpg'}
  ];

  var sizes = [
    'Small', 'Medium', 'Large'
  ];

  var data = {
    products: products,
    sizes: sizes
  };

  res.render('sets', data);
});

app.get('/bundle', function(req, res){
  var products = [
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Red Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Green Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'White Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Yellow Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Stapless Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Wired Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Non Wired Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Plain Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Cotton Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/whitebra.jpg'},
    {name: 'Blue Bra', price: '299',image : '/media/images/blackbra.jpg'},
    {name: 'Black Bra', price: '299',image : '/media/images/whitebra.jpg'}
  ];

  var sizes = [
    'Small', 'Medium', 'Large'
  ];

  var data = {
    products: products,
    sizes: sizes
  };

  res.render('bundle', data);
});



app.listen(4000);
