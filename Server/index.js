require('dotenv').config();
require('newrelic');
const app = require('./server.js')

app.listen(3001, () => {
  console.log('Listening on port 3001...')
})
