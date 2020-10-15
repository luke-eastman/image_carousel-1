const express = require('express');
const app = express();
const db = require('../DB/crud.js');
const bodyParser = require('body-parser')

const path = require('path');
const babelPolyFill = require('@babel/polyfill');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/', (req, res) => {
  res.end('Baby Steps!')
});

app.get('/products/:product/', function(req, res) {
  var product = req.params.product;
  db.getImages(product, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(result);
    }
  });
});

app.post('/image', (req, res) => {
  db.createImage(req.body.image, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/image', (req, res) => {
  let image = req.body;
  db.updateImage(image, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

app.delete('/image', (req, res) => {
  let product = req.body.image.product;
  let url = req.body.image.url;
  db.deleteImage({
    product: product,
    url: url},
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
})

app.delete('/products', (req, res) => {
  let product = req.body.product;
  db.deleteProduct(product, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

module.exports = app;


