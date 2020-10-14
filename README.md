# Carousel
Image Carousel

# Welcome to the image carousel.

In order to get setup run the following scripts:

1) Install Dependencies: npm install

2) Seeding Script:
  - open mongo instance in terminal: mongo
  - choose database: use carousel
  - clear collection: db.images.remove({})
  - in a seperate terminal: npm run dbSetup

3) Server Start Script: npm start

4) Webpack Script: npm run build

5) Carousel should be rendered to DOM


Testing Script: npm test

Have Fun!

# CRUD Operations

## Create:
  method: get

  endpoint: /products

  request body must include an image object

      product:   product number (required)

      imageName: title of the image

      color:     product color variation

      url:       url of the actual image (required)

      alt:       alternate

## Retrieve:
  method: post

  endpoint: /products/:product/

  params: :product is the product number defining each primary record

  returns: array of all images associated with the product in JSON format

  product:   product number

  imageName: title of the image

  color:     product color variation

  url:       url of the actual image

  alt:       alternate

## Update:
  method: put

  endpoint: /products

  request body must have an image object with at least product and url keys. The item matching those two keys will be updated with the values at the remaining keys

  product:   product number (required)

  imageName: title of the image

  color:     product color variation

  url:       url of the actual image (required)

  alt:       alternate

## Delete:
  method: delete

  endpoint: /products

  request body must have an image object with at least product and url keys. The item matching those two keys will be deleted

  product: product number (required)

  url:     url of the actual image (required)
