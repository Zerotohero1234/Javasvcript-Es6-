//  push , pop , shift , unshif

const data = [10,20,30]
console.log(data);


// push() ແມ່ນການເພີ່ມສະມາຊິກໄປຕໍ່ທ້າຍໝູ່
data.push(...[40,50,60,70])
console.log("push: ",data);

// pop() ແມ່ນການເອົາສະມາຊິກໂຕທ້າຍໝູ່ອອກ
data.pop()
data.pop()
console.log("pop: ",data);

// shift ແມ່ນການເອົາສະມາຊິກທາງໜ້າອອກ ຕົງກັນຂ້າມກັບ pop()
data.shift()
console.log("sift: ",data);

// unshift ແມ່ນການເພີ່ມຂໍ້ມູນສະມາຊິກເຂົ້າທາງໜ້າ ເປັນຂົ້ວຕົງຂ້າມກັບ push()
data.unshift(9)
console.log("unshift: ",data);