// Array Reduce

const data = [10,20,30,40]

// array.reduce((ຄ່າທີ່ຖືກປະມວນຜົນ,element)=>{},ຄ່າເລີ່ມຕົ້ນ) // total = 0

const summation = data.reduce((value,e)=>{
    // return e+value
    console.log("value: ",value);
    const total = e + value
    return total
},0)// value = 0 => 10 => 30 => 60 => 100

// total = 10+0 total = 10 => 20+10 total = 30 => 30+30 total = 60 => 40+60 total = 100
console.log("Summation: ",summation);


const cart = [
    {name:"bag",price:500},
    {name:"book",price:900},
    {name:"camera",price:5000}
]

const checkout = cart.reduce((begin,p)=>{
    return p.price+begin
},0)

console.log(`ລູກຄ້າຕ້ອງຊຳລະເປັນຈຳນວນເງິນ: ${checkout}Kip`);