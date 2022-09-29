// use with array or obj

// Array
const colors = ['green','red','yellow']

// old
const x = colors[0] // green
const y = colors[1] // red
const z = colors[2] // yellow

// new
const [a,b,c] = colors // a = green , b = red , c = yellow
const [,,e] = colors // e = yellow
console.log(a);
console.log(b);
console.log(c);
console.log("e = ",e);

// Obj
const product = {
    productName : 'computer',
    price:30000,
    stock:10
}

// old
const productName = product.productName
const price = product.price
const stock = product.stock

// New
const {productName:pN,price:pR,stock:sT} = product

console.log(pN);
console.log(pR);
console.log(sT);