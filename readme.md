# description

A full-backend systam that can handle post delete update and read operations witha blank html representation page all apis are tested

## Features

- Display products from MongoDB database
- adding new products
- Product management using Express routes
- cart system
- Backend APIs
- MongoDB database
- seeding

## pproject structure
  FINAL_PROJECT_DECI_L4/
│
├── node_modules/
│
├── public/
│ ├── index.html
│ ├── app.js
│ ├── style.css
│
├── db/
│ └── connect.js
│
├── models/
│ ├── Product.js
│ └── Cart.js
│
├── routes/
│ ├── productProduct.js
│ └── cartCart.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv

## how to run

- all things are tested on postman and i suggest running it on postman as it should handle all crud operations and in vs code typr npm run server and then test it with postman and thanks and write the posts according to schemas

## and you should run the following commands in terminal :
- npm run server to run the server.js file.
-use postman as i said to post delete update or read the database.

## my api endpoints :

- http://localhost:3000/products which manages products.
- http://localhost:3000/cart which manages my cart

## role actions :
- as a user i can navigate and purchase products
- as a dev i can add and delete products from postman

## for test with post man use theese enpoints (urls):

- http://localhost:3000/products which manages products.
- http://localhost:3000/cart which manages my cart.

## for seeding:
- run node seed.js to load products.
