// Array Map

const numbers = [10,20,30,40]
console.log(`number: ${numbers}`);

const result = numbers.map(e=>e*2)
console.log(`result: ${result}`);


const data = ["Rain","sunny","thunderstorm","sunny","Rain","fresh weather","fog"]

const result1 = data.map((ele,i)=>{
    return `ວັນທີ່ ${i+1} , ສະພາບອາກາດ = ${ele}`
})

console.log(result1);

const data1 = [
    {day:"01/06/2564",weather:"sunny",temp:27},
    {day:"02/06/2564",weather:"rainny",temp:23},
    {day:"04/06/2564",weather:"foggy",temp:18}
]

const result2 = data1.map(e=>e.weather)
console.log(result2);