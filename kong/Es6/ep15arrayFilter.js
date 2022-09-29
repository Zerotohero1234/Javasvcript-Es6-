// Array Filter

// const data = [10,20,30,40]

// const result = data.filter(e=>e>20)

// console.log(result);

const data = [
    {name:"Anouwath",saraly:25000,department:"Promgramer"},
    {name:"koko",saraly:30000,department:"Marketing"},
    {name:"nut",saraly:10000,department:"fukengarn"},
    {name:"bel",saraly:50000,department:"Marketing"},
    {name:"joy",saraly:10000,department:"Fuekngarn"}
]

const research = data.filter(ele=>ele.saraly>10000).filter(e=>e.department==="Marketing")

console.log(research);