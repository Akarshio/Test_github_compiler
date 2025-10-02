const mark = 100
console.log(mark)
const balance = new Number (100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2));

const value = new Number (100.58876) // pointke baad mein round figure karta hai , 5 ke above rhega to 1 increment kar dega nhin to same value rhene dega MSB wala . 
console.log(value.toPrecision(3));  


const Hundreds = 10000000 // isse comma aata hai value ke bitch mein
console.log(Hundreds.toLocaleString('en-IN'))

// ***********MATHS*************************

let valueN = 4.6
console.log(Math)
console.log(Math.round(`${valueN}`)); // new trick by investigation method. 

console.log(Math.floor(`${valueN}`));
console.log((Math.random() * 10 ) + 1)

let min = 20
let max = 50

console.log(Math.floor(Math.random()*(min+1)) +min)




