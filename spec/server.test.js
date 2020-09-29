const request = require("supertest");
const app = require("../Server/index.js");
const {MongoClient} = require('mongodb');


describe('Truth Serum', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})



describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/carousel', {
      useNewUrlParser: true,
    });
    db = await connection.db('carousel');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });


  test('should get all photos for color of item', async done => {
    const images = db.collection('images')
    const mockImage = {
      _id: 1,
      product: 'lacroiz-6-pack',
      imageName: 'stock-studio-image',
      color: 'peach-pear',
      url: 'https://target-image-carousel.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-24+at+5.20.35+PM.png',
      alt: 'peach-pear-lacroix'
    }
     images.insertOne(mockImage);

    const insertedImage =  images.findOne({color: 'peach-pear'});
    expect(insertedImage).toEqual(mockImage)

  })
})


// test('truth serum', () => {
//   expect(true).toBe(true);
// });


// test('GET photos for color selected', done => {
//   return
// })