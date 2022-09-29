// loop Array
// for loop , forEach , forOf

const data = [10,20,30,40,50]

// For loop
// for (let index = 0; index < data.length; index++) {
//     if (data[index]>=30) break
//     console.log(`ລຳດັບທີ່ ${index} = ${data[index]}`);
// }


// forEach ບໍ່ສາມາດໃຊ້ງານ break ກັບ continuse
// let sum=0
// data.forEach(element => {
//      sum += element
//     console.log(`ຜົນລວມ = ${sum}`);
// });


// forOf
for(let key of data){
    if(key>=30) break
    console.log(`ສະມາຊິກ Array Daya = ${key}`);
}