const express = require('express');
const app = express();
const port = 8080;
const Image = require('../DB/image.js')
const bodyParser = require('body-parser')
app.use(express.json());
const path = require('path');


app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/', (req, res) => {
  res.end('Baby Steps!')
})

app.get('/api/products', function(req, res) {
  Image.find({}, function(err, result) {
    if (err) {
    throw err;
  } else {
    res.send(result);
  }
  })
});

app.get('/api/products/:product/:color/carousel', function(req, res) {
  var productParam = req.params.product;
  var colorParam = req.params.color;
    debugger;
  Image.find({

    $and: [
      { $or: [ { color: colorParam }, { color : 'all' } ] },
      { product: productParam}
    ]
}, function(err, result) {
    if (err) {
    throw err;
  } else {
    res.send(result);
  }
  });
  debugger;
});

app.listen(port, () => {
  console.log('Listening on port 8080...')
})


module.exports = app;


