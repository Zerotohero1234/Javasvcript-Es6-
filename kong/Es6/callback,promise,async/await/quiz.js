// calculate=(a,b,callback)=>{
//     console.log("ກຳລັງຄຳນວນ...");
//     setTimeout(()=>{
//         const sum = a+b
//         callback(sum)
//     },2000)
// }

// result=(final)=>{
//     console.log(`ຜົນບວກແມ່ນ ${final}`);
// }

// calculate(10,40,result)

calculate=(a,b)=>{
    console.log("ກຳລັງຄຳນວນ...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(resolve){
                resolve(`ຜົນບວກ${a+b}`)
            }else{
                reject(`ການຄຳນວນເກີດປັນຫາ`)
            }
        },2000)
    })
}

async function main(){
    console.log(await calculate(10,20));
    console.log(await calculate(50,20));
    console.log(await calculate(40,20));
    console.log(await calculate(80,20));
    console.log(await calculate(100,20));
    console.log(await calculate(1000,20));
}

main()