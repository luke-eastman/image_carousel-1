const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => {
  res.end('Baby Steps!')
})


app.listen(port, () => {
  console.log('Listening on port 8080...')
})