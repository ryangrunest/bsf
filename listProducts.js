const faker = require('faker');

let productArr = [];

for (var i = 0; i < 10; i++) {
  let name = faker.commerce.productName();
  let price = faker.commerce.price();
  productArr.push(`${name}: $${price}`);
  // console.log(productArr[i]);
}
console.log(productArr)
