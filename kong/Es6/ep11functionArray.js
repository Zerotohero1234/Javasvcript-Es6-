// splice % slice
// splice(ຕຳແໜ່ງທີ່ຈະລົບ,ຈຳນວນທີ່ຈະລົບ,ສະມາຊິກທີ່ຕ້ອງການແຊກເຂົ້າໄປໃນຕຳແໜ່ງທີ່ລົບ) ແມ່ນການລົບຂໍ້ມູນສະມາຊິກແບບຊ່ວງຢາກລົບຊ່ວງໃດຫາຊ່ວງໃດ
// slice(ຕຳແໜ່ງເລີ່ມຕົ້ນ,ຕຳແໜ່ງສຸດທ້າຍ-1 ຫຼື ກ່ອນຕຳແໜ່ງນັ້ນ) ແມ່ນການດຶງສະມາຊິກມາໄຊ້ງານ

const data = [10,20,30,40,50]

console.log(data);

// splice
data.splice(1,3,888)
console.log("splice: ",data); // [10,888,50] out => 20,30,40


// slice 
const dataSlice = [10,20,30,40,50]
console.log("before slice: ",dataSlice);
const lastData = dataSlice.slice(1,3) // 1,2 [20,30]
console.log("after slice: ",lastData);