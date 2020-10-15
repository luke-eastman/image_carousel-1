const faker = require('faker');

const dataGenerator = (numberOfPrimaryRecords) => {
  let images = [];

  let urls = imageUrlGenerator();

  for (let i = 0; i < numberOfPrimaryRecords; i++) {
    let imagesForRecord = Math.floor(Math.random() * 8);
    for (let j = 0; j < imagesForRecord; j++) {
      let image = {
        product: i,
        imageName: faker.commerce.productDescription(),
        color: faker.commerce.color().split(' ').join('-'),
        url: urls[randomUrlIndex()],
        alt: faker.image.abstract()
      }
      images.push(image);
    }

  }
  return images;
}

const imageUrlGenerator = () => {
  let urls = [];

  for (let i = 0; i < 1000; i++) {
    let url = `https://tarjay-product-images.s3-us-west-2.amazonaws.com/images/image${i}.jpg`;
    urls.push(url);
  }
  return urls;
}

const randomUrlIndex = () => {
  return Math.floor(Math.random() * 1000);
}

let urls = imageUrlGenerator();

module.exports = dataGenerator;
