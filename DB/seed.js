const dataGenerator = require('./dataGenerator.js');
//const db = require('./index.js')
const db = require('./postgresCRUD.js');


const productEntries = 10;

var fakeData = dataGenerator(productEntries);

(async () => {
  try {


    for (var i = 0; i < productEntries; i++) {
      await db.seedCreateProduct(i);
    }

    for (var i = 0; i < fakeData.length; i++) {
      await db.seedCreateImage(fakeData[i]);
    }

  } catch (err) {
    console.error(err);
  }
})();




// Image.create(fakeData)
//   .then(() => mongoose.disconnect())
//   .catch(err => console.log(err))


  var realData = [
  {
    product: 1,
    imageName: 'stock-studio-image',
    color: 'baby-blue',
    url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.20.35+PM.png',
    alt: 'baby-blue-sweatshirt'
  },
  {
    product: 1,
    imageName: "girl-modelingSS1",
    color: "all",
    url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.04.32+PM.png",
    alt: "baby-blue-sweatshirt",
    __v: 0
  },
  {
      product: 1,
      imageName: "girl-modelingSS2",
      color: "all",
      url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.21.10+PM.png",
      alt: "baby-blue-sweatshirt",
      __v: 0
  },
  {
      product: 1,
      imageName: "girl-modelingSS3",
      color: "all",
      url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.06.16+PM.png",
      alt: "baby-blue-sweatshirt",
      __v: 0
  },
  {
      product: 1,
      imageName: "girl-modelingSS4",
      color: "all",
      url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.08.14+PM.png",
      alt: "baby-blue-sweatshirt",
      __v: 0
  },
  {
      product: 1,
      imageName: "girl-modelingSS5",
      color: "all",
      url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.09.38+PM.png",
      alt: "baby-blue-sweatshirt",
      __v: 0
  },
  {
      product: 1,
      imageName: "girl-modelingSS6",
      color: "all",
      url: "https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-10-08+at+4.09.10+PM.png",
      alt: "baby-blue-sweatshirt",
      __v: 0
  }
];



