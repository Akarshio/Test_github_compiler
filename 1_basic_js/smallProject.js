// Question 1: The Inventory Manager (For-in vs For-of)
// Aapke paas ek object hai jisme items ka stock hai, aur ek array hai naye orders ka.
//     const stock = { "laptop": 10, "mouse": 5, "keyboard": 0 };
// const orders = ["laptop", "mouse", "laptop", "monitor"];
// Task:
//     for...in use karke saare products ke naam print karo.
//     for...of use karke orders check karo: Agar product stock mein hai toh
//     console.log karo "Order Placed", agar nahi hai ya stock 0 hai toh "Out of Stock".

//   const stock = {
//     "laptop" : 10,
//       "mouse" : 5,
//       "keyboard" : 0};
//   const orders = ["laptop", "mouse", "laptop", "monitor"];
//
//   for ( const key in stock) {
//       console.log(stock);
//
//
//   }
//
//   for ( const it of orders) {
//      console.log(it)
//       if ( stock[it] !== undefined && stock[it] !== null  ) {
//           console.log("Order placed")
//           stock[it]--;
//       }else {
//           console.log("Out of Stock")
//       }
// }
//
//  Question 2: The "Grand Total" Calculator (Reduce/Acc)
// Aapke paas ek cart hai:
//
// Task:
// reduce (acc) ka use karke total bill calculate karo (Price * Qty).
// forEach ka use karke ek aisi string banao: "You bought 2 Shoes and 3 Shirts".

const cart = [{name: "Shoe", price: 2000, qty: 2}, {name: "Shirt", price: 500, qty: 3}];

 const totalPrice = cart.reduce(  (acc, item) => {
     // const subtotal = item.price * item.qty;
     // const currentTotal = acc + subtotal;
     // console.log(`name: ${item.name} | Qty: ${item.qty} | Subtotal:  ${subtotal}`)
     // return currentTotal;
     console.log(`name : ${item.name} | Price :  ${item.price} | Qty :   ${item.qty} `)
     return acc + (item.price * item.qty);



 }, 0)
 console.log(totalPrice)

cart.forEach( (e) => {
      console.log(`you bought ${e.qty} ${e.name} `)
  })




insert.innerHTML =  `<div class="card">
  <!-- Image -->
  <img src="" alt="Profile Picture" class="card-img">

  <div class="card-content">
    <!-- Name -->
    <h2 class="card-name">John Doe</h2>

    <!-- Email -->
    <p class="card-email"></p>

    <!-- Action Button (Optional) -->
    <a href="" class="card-btn">Email</a>
  </div>
</div>
`