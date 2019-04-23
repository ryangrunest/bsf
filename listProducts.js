const faker = require('faker');

let productArr = [];

for (var i = 0; i < 10; i++) {
  productArr.push(faker.commerce.productName());
  // console.log(productArr[i]);
}
console.log(productArr)
