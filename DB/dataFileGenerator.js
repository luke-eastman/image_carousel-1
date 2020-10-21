const dataGenerator = require('./dataGenerator.js');
const fs = require('fs');

var writeStream = fs.createWriteStream('./imageCarouselData.csv');

const ENTRIES = 10000000;
const STEP_COUNT = 1000;

const STEP = ENTRIES / STEP_COUNT;

(async () => {
  var count = 0;
  for (var i = 0; i < STEP_COUNT; i++) {
    var images = dataGenerator(i * STEP, (i + 1) * STEP);

    const writeImage = (image) => {
      return new Promise((resolve) => {
        var imageCsv = `${count++}|${image.product_id}|${image.imageName}|${image.color}|${image.url}|${image.alt}\n`;
        if (!writeStream.write(imageCsv)) {
          writeStream.once('drain', resolve)
        } else {
          resolve();
        }
      })
    }
    for (image of images){
      await writeImage(image);
    }
  }

  writeStream.end();
})();

