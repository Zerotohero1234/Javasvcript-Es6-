//ສ້າງ Promise 
const connect = true // ເຊັກວ່າຕໍ່ເນັດບໍ
const url1="Anouwath.dex/file1.json"
const url2="Anouwath.dex/file2.json"
const url3="Anouwath.dex/file3.json"
const url4="Anouwath.dex/file4.json"
const url5="Anouwath.dex/file5.json"

downloading=(url)=>{
    return new Promise(function(resolve,reject){
        console.log(`ກຳລັງໂຫລດຟາຍຈາກ ${url}`);
      setTimeout(()=>{
        if(connect){
            resolve(`ໂຫລດ ${url} ຮຽບຮ້ອຍ`)
        }  else{
            reject("Error")
        }
      },2000)
    })
}

downloading(url1).then((result)=>{
    console.log(result);
    return downloading(url2)  
}).then(function(result){
    console.log(result);
    return downloading(url3)
}).then(function(result){
    console.log(result);
})