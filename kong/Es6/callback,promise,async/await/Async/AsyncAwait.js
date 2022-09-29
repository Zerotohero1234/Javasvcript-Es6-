//Async = Asyncronus & Await

const connect = true;
const url1="Anouwath.dex/file1.json"
const url2="Anouwath.dex/file2.json"
const url3="Anouwath.dex/file3.json"
const url4="Anouwath.dex/file4.json"
const url5="Anouwath.dex/file5.json"

dowmloading=(url)=>{
    return new Promise((resolve,reject)=>{
        console.log(`${url} Downloading...`);
        setTimeout(()=>{
            if(connect){
                resolve(`Downloading ${url} completely`)
            }else{
                reject(`Connect your internet `)
            }
        },2000)
    })
}

//Async & Await

async function start(){
    console.log(await dowmloading(url1));
    console.log(await dowmloading(url2));
    console.log(await dowmloading(url3));
}

start()

// api ພາບສິນຄ້າ (backend) -> fronted (ສະອດງພາບໃນເວັບ)
//  api (promise) -< (pending)-> ຖ້າຂໍ້ມູນມາຄົບກ່ອນ (await) -> ສະແດງພາບ

// loading..... -> ສະແດງພາບ