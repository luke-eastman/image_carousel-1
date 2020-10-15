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
console.log(urls[200]);

console.log('1 record: ', dataGenerator(1));
console.log('5 records: ', dataGenerator(5));
// const imageRandomizer = (array) => {
//    var randomIndex = Math.floor(Math.random() * array.length)
//   return array[randomIndex];
// }



// var fakeImageDataCreator = function(numberOfEnries) {

//   var dataEntries = [];
// var currentID = 2
// var referenceIndex = 0
//   for (var i = 0; i < numberOfEnries - 7; i++) {
//          if (i === referenceIndex + 7) {
//           referenceIndex += 7
//           currentID++
//         }
//     dataEntries.push({
//        product: currentID,
//        imageName: faker.commerce.productDescription(),
//        color: faker.commerce.color().split(' ').join('-'),
//        url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/' + imageRandomizer(randomImageUrls),
//        alt: faker.image.abstract()
//     })
//   }
//   return dataEntries;
// }

// var fakeData = fakeImageDataCreator(700);
// var data = realData.concat(fakeData)