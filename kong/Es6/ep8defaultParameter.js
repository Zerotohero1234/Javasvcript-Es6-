// Default Parameter

getDataCustomer=(customerName,customerAddress="Vientiane")=>{
    // if(!customerAddress){
    //     customerAddress = "Vientiane"
    // }
    const address = `ຊື່ລູກຄ້າ : ${customerName}
    ທີ່ຢູ່ : ${customerAddress}`
    return address
}

console.log(getDataCustomer("Anouwath","Viengchalern"));
console.log(getDataCustomer("AAAAA"));
