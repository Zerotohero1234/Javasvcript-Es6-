//  Rest Parameter

summation=(...numberArr)=>{
    let total = 0
    for ( let number of numberArr) total+=number //0+500 500+1000
    return total
}

console.log(summation(500,1000));
console.log(summation(500,1000,5000));
console.log(summation(500,1000,6999,777));
console.log(summation(500,1000,6555,4444,500));


