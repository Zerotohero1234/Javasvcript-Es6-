//  ຄົ້ນຫາຂໍ້ມູນໃນ Array
// indexof(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຕຳແໜ່ງ index ທີ່ຄົ້ນເຈີ ຖ້າຄົ້ນຫາບໍ່ເຫັນຈະໄດ້ -1
// find(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຂໍ້ມູນທີ່ຄົ້ນພົບ ຖ້າຄົ້ນຫາບໍ່ເຫັນຈະໄດ້ undefined
// finIndex(ຂໍ້ມູນ) => ຜົນການຄົ້ນຫາຈະໄດ້ຕຳແໜ່ງ index ທີ່ຄົ້ນພົບ ຄ້າຄົ້ນຫາບໍ່ເັນຈະໄດ້ -1

const colors = ["red","green","blue","purple","white"]

const index = colors.indexOf("blue"); // 2
console.log(index);

const search =  colors.find(element=>element==="green")
console.log(search);

const foundIndex = colors.findIndex(found=>found==="green")
console.log(foundIndex);