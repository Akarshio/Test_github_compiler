let MyDate = new Date()
// console.log(MyDate);

console.log(MyDate.toDateString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleString());

let NewDate = Date.now();
console.log(NewDate);

let MyDateCon = new Date("2025-12-01");
console.log(MyDateCon.getTime());


if (MyDateCon > NewDate) {
  console.log("True");
  
} else {
  console.log("False");
  
}






// JavaScript me Date object aur Date.now() dono internally milliseconds since 1 Jan 1970 store/use karte hain.
//  Agar hum new Date("2025-12-01") likhte hain, to wo date 2025-12-01 00:00:00 (midnight) ko represent karti hai, 
//  aur getTime() us moment tak ke saare milliseconds ka number deta hai. Date.now() code chalne wale 
// exact current time (current date + time) ko milliseconds me deta hai. Jab if (MyDate > Date.now
// likhte hain, to JavaScript MyDate ko number ( MyDate.getTime() ) me convert karke compare karta hai. 
//  Agar MyDate.getTime() current time se jada hai to condition true (future date), warna false (past ya current date) milega.









