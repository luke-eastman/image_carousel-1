const express = require('express');
const app = express();
const port = 8080;
const Image = require('../DB/image.js')
const bodyParser = require('body-parser')
app.use(express.json());
// X


app.get('/', (req, res) => {
  res.end('Baby Steps!')
})

app.get('/carousel', function(req, res) {
  Image.find({}, function(err, result) {
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