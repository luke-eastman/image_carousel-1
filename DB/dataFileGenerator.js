const dataGenerator = require('./dataGenerator.js');
const fs = require('fs');

var writeStream = fs.createWriteStream('./imageCarouselData');

const ENTRIES = 10000000;
const STEP_COUNT = 100;

const STEP = ENTRIES / STEP_COUNT;

(async () => {
  for (var i = 0; i < STEP_COUNT; i++) {
    var images = dataGenerator(i * STEP, (i + 1) * STEP);
    var j = -1;


    const writeImage = (image) => {
      return new Promise((resolve) => {
        if (!writeStream.write(JSON.stringify(image).concat('\n'))) {
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

