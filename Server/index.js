const express = require('express');
const app = express();
const port = 8080;
const Image = require('../DB/image.js')
const bodyParser = require('body-parser')
app.use(express.json());
const path = require('path');


app.use(express.static(path.join(__dirname, 'Public/index.html')));

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

app.get('/api/products/product/carousel', function(req, res) {
  Image.find({
    $and: [
      { $or: [ { color: 'baby blue' }, { color : 'all' } ] },
      { product: 'standard-fit-hoodied-sweatshirt'}
    ]
}, function(err, result) {
    if (err) {
    throw err;
  } else {
    res.send(result);
  }
  })
});

app.listen(port, () => {
  console.log('Listening on port 8080...')
})