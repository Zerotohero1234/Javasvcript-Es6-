//ທຳງານກັບ obj

// ຕົວແປເກັບຂໍ້ມູນ
const Name = "Anouwath";
const age = 21;
const address = "Vientiane";

const customer = {
    customerName:Name,
    age, // ຖ້າ property ມິຊື່ດຽວກັບໂຕແປເຮົາສາມາດຂຽນເທື່ອດຽວໄດ້ເລີຍ
    address,
    showName(){
        console.log(this.customerName);
    }
}

console.log(customer);

customer.showName()