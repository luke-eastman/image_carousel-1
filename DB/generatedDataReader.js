const fs = require('fs');
const lineByLine = require('n-readlines');
const liner = new lineByLine('./imageCarouselData');


const db = require('./postgresCRUD.js');


const ENTRIES = 100;
const BATCH_SIZE = 10;

//use batch size to build batches of data to write to the DB.


(async () => {
  await db.Product.sync({force: true});
  await db.Image.sync({force:true});
  console.log('sync complete, creating products...');
  for (var i = 0; i < ENTRIES; i++) {
    await db.Product.create({product: i, productName: ''});
  }
  console.log('products created')
  console.log('creating images...')
  var count = 0;
  var batch = 0;
  let line;
  var images = [];
  while (line = liner.next()) {
    line = line.toString();
    var image = JSON.parse(line);
    images.push(image);
    if(count % 10000 === 0) {
      console.log(`inserting batch ${batch++}...`)
      await db.Image.bulkCreate(images) //still too slow. need to do something different. maybe larges batches or single entries
      .catch(err => {
        console.log(err);
      });
    }


    count++;
  }
  db.connection.close()
})();