// ທົບທວນ Callback function

//  calculate=((x,y)=>{
//      return x+y
//  })

//  display=((result)=>{
//      console.log(`ຜົນບວກ = ${result}`);
//  })

// //  normal function
// const sum = calculate(100,50)
// display(sum)

// calculate=((x,y,callback)=>{
//     console.log("ກຳລັງຄຳນວນ...");
//     setTimeout(()=>{
//         const sum = x+y
//         callback(sum) // callback(sum) => display(sum)
//     },3000)
// })

// display=((result)=>{
//     console.log(`ຜົນບວກ = ${result}`);
// })

// //  callback function
// calculate(100,50,display) // display = callback

// calculate=((x,y,callback)=>{
//     console.log("ກຳລັງຄຳນວນ...");
//     setTimeout(()=>{
//         const sum = x+y
//         callback(sum) // callback(sum) => function(sum)
//     },3000)
// })


// //  callback function
// calculate(100,50,function(result){ //fucntion(result) => callback(sum)
//     console.log(`ຜົນບວກ: ${result}`);
// })


// ຂຽນໂປຣແກຣມດາວໂຫລດ

const url1="Anouwath.dev/file1.json"
const url2="Anouwath.dev/file2.json"
const url3="Anouwath.dev/file3.json"

downloading=(url,callback)=>{
    console.log(`ກຳລັງໂຫລດຟາຍຈາກ ${url}`);
    setTimeout(()=>{
        callback(url)
    },2000)
}

// complete=(result)=>{
//     console.log(`ດາວໂຫຼດ ${result} ຮຽບຮ້ອຍ`);
// }

downloading(url1,function(result){
    console.log(`ດາວໂຫຼດ ${result} ຮຽບຮ້ອຍ`);
    downloading(url2,function(result){
        console.log(`ດາວໂຫຼດ ${result} ຮຽບຮ້ອຍ`);
        downloading(url3,function(result){
            console.log(`ດາວໂຫຼດ ${result} ຮຽບຮ້ອຍ`);
        })
    })
})
