const fs = require('fs');
const lineReader = require('line-reader');


const db = require('./postgresCRUD.js');


const ENTRIES = 100;
const BATCH_SIZE = 10;

//use batch size to build batches of data to write to the DB.


(async () => {
  //await db.Product.sync({force: true});
  await db.Image.sync({force:true});
  console.log('sync complete, creating products...');
  // for (var i = 0; i < ENTRIES; i++) {
  //   await db.Product.create({product: i, productName: ''});
  // }
  console.log('products created')
  console.log('creating images...')
  var images = [];
  var batch = 1;
  var count = 0
  lineReader.eachLine('./imageCarouselDataTest', async (line, last) => {

    images.push(JSON.parse(line));
    console.log('line : ', ++count);

    if (last) {
      db.connection.close()
    }
  });
})();