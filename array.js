// // array declare
// const arr1 = [7,2,3,4];
// console.log(arr1);
//
// // another way
//
// const arr6 =  new Array(1,2,4,8)
// console.log(arr6);
//
// // by using constructor
//
// class MyArray {
//
//     constructor(){
//         this.arr = new Array(1,4,6);
//     }
// }
//
// const obj = new MyArray();
// console.log(obj.arr);
//
// // for length declare
// const arr = new Array(5);
// console.log(arr.length);
//
// const arr9 = { property: [1,4,7,8]}
// console.log(arr9);
//
// // obj create
// let arr3 = {
//     name: 'Ram',
//     roll_no:  10
// }
//
// let arr4 =  {
//     name: 'Akarsh',
//     roll_no: 20,
// }
//
// console.log(arr3,  arr4);
//
// const num = [1,4,7];
// const array = num.concat('a','b','v');
//  for (let i = 0; i <= array.length; i++){
//      console.log(array[i]);
//  }
//
//  const num2 = [1,3,5];
//  num2.forEach((x ) => {   // arrow parameter (x),
//      console.log(x);                     // for each element use arrow parameter variable inside log.
//  });
//
//  const  test = ['d','c','b','a'];
//  const tests = test.filter((x) => typeof (x) === "number");
//  const test1 = test.map((x) => x.toUpperCase());
//  console.log(test1);
//
//
// const arr7 = [2,4,7,9];
// // console.log(arr7.sort());
// // arr7.push(10);
// // arr7.pop();
// // arr7.shift();
// // arr7.unshift(10,4);
// const newArr = arr7.sort();
// console.log(newArr.reverse());
//
// const arr8 = arr7.join('-');
// console.log(arr8);
//
// const newArrayTest = [10,30,4,7];
// const newArray = newArrayTest.map((x) => typeof(x) === "number");
//
//
// function isNumber(value) {
//     return typeof value === "number";
// }
//
// const a1 = [1,4,7];
// console.log(a1.some(isNumber));
//
// // slice & splice
//
// const newArr7 =  [1,5,9,5,8,4];
// const newAr = newArr7.slice(2,4);
// console.log(newAr);
// const newArr4 = newArr7.splice(1,4);
// console.log("c", newArr7);
// console.log(newArr4);
//
// const manager = {
//     name: "Akarsh",
//     age: 21,
//     job: "SDE1",
// }
//
// const intern = {
//     name: "Aryan",
//     age: 18,
//     job: "F-End Developer",
// }
//
// function sayHi() {
//      console.log(`Hi ${this.name}, welcome to our team.`);
// }
//
//
// manager.sayHi = sayHi;
// intern.sayHi = sayHi;
// manager.sayHi();
// intern.sayHi();
//
//  function Car(name , year , price) {
//      this.name = name;
//      this.year =  year;
//      this.price = price;
//  }
//
//  const myCar = new Car('Xuv', 2018, 2000000);
// console.log(myCar.name, myCar.year, myCar.price);
//
// class Cars {
//      constructor(names, prices) {
//          this.names = names;
//          this.prices = prices;
//      }
// }
//
// const myCars = new Cars("Om prakash ", 10);
// console.log(myCars.names, myCars.prices);
//
// const arr0 = [1,3,6];
// const arr01 = [2,6,8];
//
// const results = [...arr0 , ...arr01];
// console.log(results);
//
//
//
//
// // const a = [1, 2, 3];
// // const b = [4, 5, 6];
//
// // const result = [...a, ...b];
// // console.log(result);
//
// const l = {b: 2, c: 3,};
// const f = {d: 2, e: 3,};
//
// const result =  {  ...l, ...f };
// console.log(result);
//
//
//
// const appUSer = [
//     {
//         id: 1,
//         email: "akarsh@gmail.com",
//     },
//     {
//         id: 2,
//         email: "null@gmail.com",
//     }
// ];
//
// const userResult = appUSer.map((x) => x.email);
// console.log(userResult);
//
//
// function userAp(username){
//
//     if (!username) {
//         return "Please enter username";
//     }
//     return  `${username}, welcome to our team"`;
// }
//
// console.log(userAp("Akarsh"));
//
//
// function calculateThePrice(...val) {
//     return val;
//
// }
// console.log(calculateThePrice(200,400));
//
// const myAccount = [1,3,5];
// const myCart = ([1,4,7]);
// function chek(values) {
//     return values[1]
// }
// console.log(chek(myCart));
// console.log(chek([400,300,500]));
//


// let user = {
//     username: "Akarsh",
//     p_No: 9128907594,
//
//
//     welcomeMessage() {   //  method
//         console.log(`${this.username}`)
//     },
// };
// user.welcomeMessage();

// function addTwo() {
//     const username = "Akarsh";
//     console.log(this.username);
// }
// addTwo();

// const twoOne = () => {
//     let username = "Akarsh";
//     console.log(this.username)
// }
// console.log(twoOne);
//
// // explicit arrow function
// const oneTwo = (num1, num2) =>   {
//     return num1 + num2;
// };
//
// console.log(oneTwo(2,4));
//
// // imlpicit function
//
// const zeroOne = (num1, num2) => (num1 + num2);
// console.log(zeroOne(1,4));
//
// // implicit mein object return karna ho to
// const zeroTwo = () => ({username: "Akarsh"});
// console.log(zeroTwo());

// iifE ( immediate invoked function expression)

// (  function addOne() {
//       console.log("Hello Akarsh")
//     })(); // semi colon use for end invoked
//
// (  () => {  // arrow function also use in iifE
//       console.log("Hello aryan")
// })();

// control statement
// let temp =  30;
// if(temp === 40) {
//     console.log("Hot weather")
// }else{
//     console.log("i dont know")
// }

// const userName = "Akarsh"
// let password = 123456
//
//  let username = prompt("Enter your userName: ")
//  let passkey = Number(prompt("Enter your password: "))
//
//  if(username === userName && password === passkey) {
//      console.log(`Congrats ${userName}, Welcome back`)
//  }
//  else if ( userName !== username && password === passkey) {
//      console.log("your name does not match")
//  }
//
//  else if (passkey !== password && userName === username) {
//      console.log("Your password does not match ")
//  }
//  else{
//      console.log("Incorrect Creditantial")
//  }

// const isUserLoggedIn = true
// if(false) {
//     console.log("welcome Back")
// }else{
//     console.log("you are not loggedIn")
// }


// const month = "March";
//
// switch (month){
//     case "January": console.log("January")
//         break;
//     case "February": console.log("February")
//         break;
//     case "March": console.log("March")
//         break;
//     case "April": console.log("April")
//         break;
//     default:
//
// }
//
// // falsy value
// // false, 0 , -0 , "", null, undefine, Nan, Bigint 0n,
// // ishke aalwa kuch bhi hoga to truthy value hai
//
// const check = 0n
// if(check) {
//     console.log("hello")
// }else{
//     console.log("not hello")
// }
//
// const name = "Akarsh"
// if(name.length === 0) {
//     console.log("Empty")
// }else {
//     console.log("Not empty")
// }
//
// // check object is empty or not
// const obj = {}
// if(Object.keys(obj).length === 0) {
//     console.log("Array is empty")
// }else {
//     console.log("Array is not empty")
// }
//
// // nullish consoling operator for ignore null and undefined value;
//
// let var1;
// // var1  = 10 ?? 5;
// // var1  = null ?? 10 ?? 5;
// var1 = undefined ?? 5 ?? 10;
// console.log(var1)
//
// // ternery operator
//
// const val = 50
// val >= 100 ? console.log("Greater no ") : console.log("Smaller no")
//
// const sum = 40
// val >= 40 ? console.log("Greater no") : console.log("Smaller no")
//


// let num  = [1,"Akarsgh", "Aryan", 3];
// for ( let i = 0; i < num.length; i++){
//     console.log(num[i]);
//     for(let j = 0; j <= i ; j++) {
//         console.log(num[j]);
//         const x = num[j];
//         if ( num[j] === num[i]) {
//             console.log("both equal: ")
//         }else {
//             console.log("Not equal")
//         }
//     }
// }
//

// for(let i = 0; i <=10; i++){
//     console.log(`${i}`);
//     for ( let j = 0; j <= 10 ; j++) {
//         console.log( i +"*" + j +"=" + i*j);
//     }
// }
// let num = 1;
// do{
//     console.log(num);
// }while(num === 3){
//     console.log(num);
// }

// while (num  <= 5) {
//     console.log(`num: ${num}`);
//     num++;
// }

// do{
//     console.log(`num: ${num}`);
//     num++
//
// }while(num <= 5);
//

// ittreator in js for Of
// for in - arrya , object , map
//  foreach - array , object, map

// const arr = [
//     {
//         name: "Akarsh",
//         email: "thisisakarshgupta@gmail.com",
//         course: "B-Tech"
//     },
//     {
//         name: "Ram",
//         email: "ramhgupta@gmail.com",
//         course: "B-Tech"
//     },
//     {
//         name: "Aryan",
//         email: "aryan@gmail.com",
//         course: "B-Tech"
//     },
//
// ];
//
// for (const it of arr){
//     console.log(it.email)
// }
//
//
//
// for (const  it of arr) {
//     console.log(it);
// }

// arr.forEach( (item) => {
//     console.log(item.email);
// } );

// const map = new Map();
// map.set(1, "Akarsh");
// map.set(2,"Aryan");
// map.set(3,"Ram")
// map.set(4,"Ramu");

// for ( const [key,value] in map){  map ka internal key and value object nhi hai issi liye hm for in nhi use karte hai.
//     console.log(Object.keys(map));
// }

// for( const [key, value] of map) {
//     console.log(key , "=>", value)
// }

// map.forEach( (value, key) => {
//     console.log(key);
// } );

// object is not ittreable but by usine Object property or prototype we can do .

// const userDetails = {
//     name: "Akarsh",
//     age: 21,
//     email: "h@gmail.com"
// };
//
// for ( const key in userDetails){
//     console.log(`${key}: ${userDetails[key]}`);
// }
//
// for ( const it of Object.values(userDetails)){
//     console.log(it);
// }
//
// for ( const [key , values] of Object.entries(userDetails)){
//     console.log(key, values);
// }
//
//
// Object.entries(userDetails).forEach ( ([key,value]) => {
//     console.log(key, value);
// } );



// const arr = ["python", "java", "cpp", "js"];
// for (const it of arr) {
//     console.log(it);
// }
//
// for ( const it in arr) {
//     console.log(it);
// }


// const books = [
//     { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 2018, genre: "Adventure" },
//     { id: 2, title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-help" },
//     { id: 3, title: "Deep Work", author: "Cal Newport", year: 2016, genre: "Adventure" },
//     { id: 4, title: "Harry Potter", author: "J.K. Rowling", year: 1997, genre: "Fantasy" },
//     { id: 5, title: "The Silent Patient", author: "Alex Michaelides", year: 2018, genre: "Adventure" }
// ];
//
// const h = books.find( (d) =>  d.genre === "Fantasy"  );
// console.log(h)

// use of reduce
// let  start = [1,4,7,9,5];
//
// const nextfinal = start.reduce( (acc, count) =>   {
//     console.log(`${acc}, ${count}`)
//       return acc + count
//
// }, 0);
//
// console.log(nextfinal)

// let zero = [2,4,6,8,9,3];
//
// const sum = zero.reduce( (acc, count) => acc + count , 0);
// console.log(sum);


// ShopingCart model

// const shopingCart = [
//     {
//        name: "Py",
//        price: 999
//     },
//     {
//         name: "js",
//         price: 499
//     },
//     {
//         name: "java",
//         price: 2999
//     },
//     {
//         name: "Go",
//         price: 999
//     },
// ];

// const totalItem = shopingCart.length;
// const totalPrice =  shopingCart.reduce( (acc, item)  =>  acc + item.price , 0  );
// console.log(`total no of items: ${totalItem}
//              total price:  ${totalPrice}`);
//
// const bill = shopingCart.reduce( (acc, item)  => {
//      return (  `${acc} + ${item.name} and  ${acc} + ${item.price}`  );
//
// }, 0 )
//
// console.log(bill);

// const cartTotals = shopingCart.reduce((acc, item) => {
//     acc.totalPrice += item.price * (item.quantity || 1);
//     acc.totalCount += (item.quantity || 1);
//     return acc;
// }, { totalPrice: 0, totalCount: 0 });
//
// console.log(`Count: ${cartTotals.totalCount}, Total: ${cartTotals.totalPrice}`);


// const total = shopingCart.reduce((acc, item) => {
//     acc.Price +=  item.price * (item.number || 1);
//     acc.itemCount += (item.number || 1);
//     return acc;
// },{Price: 0, itemCount: 0});
//
// console.log(`${total.Price} , ${total.itemCount}`);


// const set = new Set([1,3,3,3,5,7,9]);
// console.log(set);


// const num = document.getElementById('owl');
//  num.addEventListener("click", () => {
//      alert("okkkkkk")
//
//  })

// document.getElementById('owl').addEventListener( 'click',  (e) => {
//     console.log(e);
// })

//   setTimeout(() =>  {
//       document.querySelector('h2').innerHTML = "Chai aur code";
//        setInterval(() => {
//            document.querySelector('h2').innerHTML = "Akarsh";
//        },1000 )
// }, 1000)


// setInterval(() => {
//     document.getElementById('start').addEventListener( 'click' ,(e) =>{
//       const name =   document.querySelector("h2").innerHTML = "Akarsh";
//         console.log( name, Date.now());
//
//     })
// },1000)

//async  interval project

// const hello = document.getElementById('start');
//   hello.addEventListener('click', () => {
//     const s =   setInterval(() => {
//         console.log("Akarsh", Date.now())
//     }, 1000)
//       document.getElementById('stop').addEventListener('click', () => {
//           clearInterval(s);
//       })
//   })

// const bgColour = () => {
//     let  change = "#" + Math.random().toString(16).slice(2,8);
//     document.body.style.backgroundColor = change;
// }
// let intervalId = null;
// document.getElementById('start').addEventListener('click', () => {
//     if ( !intervalId){
//
//         intervalId = setInterval(bgColour , 1000);
//     }
// })
// document.getElementById('stop').addEventListener( 'click', () => {
//     clearInterval(intervalId)
//     intervalId = null;
// })


// const check = document.querySelector('h1');
//  window.addEventListener('keypress', (e) => {
//      console.log(e.key);
//  })

// if (true) {
//     let a = 10;
//     var  b = 20;
// }
//
// console.log(b);
// console.log(a);



// document.getElementById('images').addEventListener("click", (e) => {
//     console.log("images clicked")
//     console.log("mouse: ", e.tagName)
// })
//
// document.getElementById('google').addEventListener( 'click' , (e)  => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google clicked")
//
//
// }   )



//
// document.querySelector('#images').addEventListener( 'click',  (e)  =>  {
//       console.log(e.target.tagName)
//
//       if (e.target.tagName === 'IMG') {
//
//           let removeIt = e.target.parentNode;
//            removeIt.remove()
//           console.log("image and li delete")
//       }
// },false  )


// Question 3: Dark Mode & Pointer (Event Pointer)
// Task:
//    1  Ek button banao jiska naam ho "Toggle Mode". Jab user click kare, body ka
//     background color "Black" ho jaye aur text "White".
//    2  Pointer Logic: mousemove event use karke screen par ek div
//     (jo circle jaisa dikhe) ko user ke mouse pointer ke saath-saath move karao. (Hint: e.clientX aur e.clientY use hoga).

//  document.getElementById('toggle').addEventListener("click", () => {
//      const bgColor = document.querySelector('body');
//      if ( bgColor.style.backgroundColor === "black") {
//          bgColor.style.backgroundColor = "white";
//          bgColor.style.color = "black"
//      }else {
//          bgColor.style.backgroundColor = "black";
//          bgColor.style.color = "white"
//      }
//
//  })
//  const cursor = document.getElementById('cursor');
//      window.addEventListener('mousemove', (e) => {
//       cursor.style.left = e.clientX + "px" ;
//       cursor.style.top = e.clientY + "px";
//     console.log(e.clientX, e.clientY);
// })
//

// const input  = document.getElementById('name');
// const submit  = document.getElementById('submit');
// const unorder  = document.getElementById('unorder');
//
// submit.addEventListener('click', (e) => {
//
//     const taskValue = input.value.trim();
//     if ( taskValue === ""  ){
//         alert("likho phele")
//         return;
//
//     }
//
//     const newLi = document.createElement('li');
//     newLi.textContent = taskValue;
//     unorder.appendChild(newLi);
//     input.value;
//
//
//
// })
//
// const deleteLi = document.getElementById('unorder');
//
//     deleteLi.addEventListener('click', (e) => {
//         if ( e.target.tagName === 'LI'){
//             let remove = e.target
//             remove.remove()
//
//
//
//         }
//
//     })





// cursor style with pointer

// const cursor = document.getElementById('cursor');
// window.addEventListener('mousemove', (e) => {
//     cursor.style.left =  e.clientX + 'px'
//     cursor.style.top = e.clientY + 'px'
//
// })
//


//   async  function getAllUser() {
//      try {
//          const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//           const data =  await response.json()
//           console.log(data)
//
//      }catch (reject) {
//           console.log(reject)
//      }
//   }
//
//   getAllUser()
//
//
//  const promosieOne = new Promise( (resolve,reject) => {
//            let isLoggedIn = false;
//            if(isLoggedIn) {
//
//                console.log("You are welcome")
//                resolve();
//            }else {
//                console.log("Not welcome")
//                reject();
//            }
//  })
//
// promosieOne.then( () => console.log("resolve ho gya "))
//
// new Promise( ( resolve, reject ) => {
//     let isLoggedIn = false;
//     if(isLoggedIn) {
//
//         console.log("You are welcome")
//         resolve();
//     }else {
//         console.log("Not welcome")
//         reject()
//
//     }
// }).then(() => {
//     console.log("Promise done")
// }).catch(() =>  {
//     console.log("promise rejected")
// }).finally(() => {
//     console.log("the process is done")
// })


 // new Promise((resolve, reject) => {
 //     const requestURL = fetch('https://api.github.com/users/hiteshchoudhary')
 //     const data =  requestURL.json()
 //     console.log(data)
 //     resolve()
 // }).then( () => {console.log("Promise done")})
 //     .catch( () => {console.log("promise not done")})
 //     .finally(() => {console.log("Final promise done")})


//  async  function getAllUserData() {
//       const requestURL = await fetch('https://api.github.com/users/hiteshchoudhary')
//       const  data =  await requestURL.json();
//       console.log(data);
// }
//
// getAllUserData()


// const promise = new Promise( (resolve,reject) => {
//     let error = true;
//     if (!error){
//         resolve({name:"Akarsh",semester: 3 })
//     }else {
//         reject("Error: detect")
//     }
// })
//
// async  function promiseFive() {
//      try {
//            const data = await promise
//            console.log(data)
//      }catch (e) {
//          console.log(e)
//      }
// }
//
// promiseFive()


// fetch('https://api.github.com/users/hiteshchoudhary')
//     .then( (response) => {
//            return response.json()
// }).then( (response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Promise ether resolve or reject ")
// })

// name , bio , and public_repos

// new Promise( async (resolve, reject) => {
//      try {
//       const responseURL = await fetch('https://api.github.com/users/hiteshchoudhary')
//
//       if(responseURL.ok ) {
//           const data = await responseURL.json();
//           const { name , bio , public_repos} = data;
//           resolve({name, bio ,public_repos})
//
//       } else{
//            reject("User not found")
//       }
//      }catch (e) {
//          reject("Api failed to fetch")
//      }
// }).then( (userdata) => {
//     console.log(userdata.name)
//     console.log(userdata.bio)
//     console.log(userdata.public_repos)
//
// }).catch((e) => {
//     console.log(e)
// })


// async  function userData(){
//
//     try {
//         const responseURL = await fetch('https://api.github.com/users/hiteshchoudhary')
//          if (responseURL.ok) {
//              const data = await responseURL.json()
//              const {name, bio, public_repos} = data
//              console.log(name)
//              console.log(bio)
//              console.log(public_repos)
//          }else{
//              console.log("User not found")
//          }
//
//     }catch (e) {
//         console.log(e)
//     }
// }
//
// userData()

// async  function ageValidtaor () {
//     try {
//         const age = 17;
//         if ( age > 18) {
//              console.log("Eligible")
//         }else {
//          console.log("Not eligible")
//         }
//     }catch (e) {
//         console.log(e)
//     }
//  }
//
// ageValidtaor()

// const promiseCheck = new Promise( (resolve, reject) => {
//              const age = 18
//             if ( age >= 18  ) {
//                 resolve("Access granted")
//             }else {
//                 reject("Access denied")
//             }
// }).then( (message) => {
//      console.log(message)
//       console.log("promise done")
//
// }).catch((e) => {
//     console.log(e)
// })

// async function userLocation() {
//     try{
//         const responseURL = await fetch('https://api.github.com/users/hiteshchoudhary')
//         if ( !responseURL.ok){
//             console.log("Api ---> Something went wrong")
//             return;
//         }
//         const data =  await responseURL.json()
//         const {location} = data
//         const message = location !== null ?  console.log("User location available: " +location) : "User location not available:";
//
//
//
//     }catch (e) {
//        console.log(e)
//     }
// }
//
// userLocation()
//
//
//  async function loader() {
//     try{
//         const responseURL = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await responseURL.json()
//         console.log(data)
//
//
//     }catch (e) {
//         console.log(e)
//     }finally {
//         console.log("Loading Spinner Stopped")
//     }
//  }
//
//  loader()


 // async  function userName(users) {
 //     try{
 //         const resposneURL = await fetch(`https://api.github.com/users`)
 //         if( !resposneURL.ok){
 //             return "Api not valid"
 //         }
 //         const allPromise = users.map( () => gettingSingleUser(name) )
 //         const data = await Promise.all(allPromise)
 //
 //         const filterUser = data.filter( (e) => {
 //             return e !== null && e.followers > 5000;
 //
 //
 //         } )
 //
 //         filterUser.forEach( (e) => {
 //             console.log(e.followers)
 //         })
 //
 //     }catch (error) {
 //
 //         console.log(error)
 //
 //     }
 //
 // }
 //
 // userName()


// async function userRepo() {
//     try {
//         const responseURL = await fetch('https://api.github.com/users');
//         if (!responseURL.ok) {
//             console.log("API Limit Exceeded or Server Error");
//             return;
//         }
//
//         // ✅ SIRF PEHLE 3 USERS LO (Testing ke liye safe hai)
//         const fullList = await responseURL.json();
//         const usersList = fullList.slice(0, 3);
//
//         const userDataPromises = usersList.map(async (user) => {
//             const detailResponse = await fetch(user.url);
//             if(!detailResponse.ok) return null;
//             return await detailResponse.json();
//         });
//
//         const allUsersData = await Promise.all(userDataPromises);
//
//         // Filter: Yahan check badal dete hain (Repos > 0) kyunki test users kam hain
//         const filt = allUsersData.filter((user) => user !== null && user.id > 0);
//
//         console.log(`--- Test Results (Found: ${filt.length}) ---`);
//
//         filt.forEach((f) => {
//             console.log(`User: ${f.login} | Repos: ${f.public_repos} | Twitter: ${f.twitter_username || "N/A"}`);
//         });
//
//     } catch (e) {
//         console.log("Caught Error: ", e.message);
//     }
// }
//
// userRepo();


// async function searchDevs() {
//     try {
//         // 1. Search for users who know 'javascript'
//         const response = await fetch('https://api.github.com');
//         const data = await response.json();
//
//         // Data ke andar 'items' array hota hai, pehle 5 lo
//         const basicUsers = data.items.slice(0, 5);
//
//         // 2. Map: Har user ki detail fetch karo (followers ke liye)
//         const detailPromises = basicUsers.map(async (user) => {
//             const res = await fetch(user.url);
//             return await res.json();
//         });
//
//         const fullDetails = await Promise.all(detailPromises);
//
//         // 3. Sorting: Followers ke basis par 'High to Low'
//         fullDetails.sort((a, b) => b.followers - a.followers);
//
//         // 4. Final Print
//         console.log("--- Top Javascript Devs by Followers ---");
//         fullDetails.forEach((user, index) => {
//             console.log(`${index + 1}. ${user.login} - Followers: ${user.followers}`);
//         });
//
//     } catch (e) {
//         console.log("Error logic: ", e);
//     }
// }
//
// searchDevs();


  // prototype , this , inheritance

  // function user(name) {
  //      this.name = name;
  // }
  //
  // Object.prototype.username = function () {
  //        console.log(`hello ${this.name}`)
  // }
  //
  // const p1 = new user("Akarsh")
  // const p2 = new user("Aryan")
  //
  // p1.username()
  // p2.username()
  //
  // const userDetails = {
  //       username: "Akarsh",
  //       roll: 20,
  //     meth: function () {
  //           console.log(`ye name hai ${this.username} and ye roll ${this.roll}`)
  //     }
  // }
  //
  // Object.prototype.mis = function () {
  //     console.log(`ye username hai ${this.roll}`)
  // }
  //
  // userDetails.mis()


// function User( username,logIn ) {
//          this.username = username
//          this.login = logIn
// }
//
// Object.prototype.userLogIn = function () {
//     console.log(`${this.username} ..... ${this.login}`)
// }
//
// const p1 = new User ("Akarsh", true)
//
// p1.userLogIn()



// printMessage, I am an array and I have [length] elements"

    // const arr = [2,4,5,7,9]
    // Array.prototype.printMessage = function () {
    //
    //
    //    console.log(`I am an array and I have ${this.length} elements`)
    // }
    //
    // arr.printMessage()

 // const User = {
 //     username: "Akarsh",
 //     isLoggedIn: false,
 //     getDetails: function () {
 //          console.log(`username ${this.username} loggin or not loggin ${this.isLoggedIn}`)
 //     }
 // }
 //
 // const Admin = {
 //      adminName: "Aryan",
 //
 // }
 //
 // Object.setPrototypeOf(Admin, User)
 // Admin.getDetails()


  // this keyword while method call in different function

  // function user(username) {
  //      this.username = username
  // }
  // function createUser(username, email) {
  //
  //   user.call(this, username)
  //     this.email = email
  //
  //
  //
  // }
  //
  // const p1 = new createUser("Akarsh", "Akarsh@gmail.com")
  // console.log(p1)


// function createCart( ) {
//     let count = 0
//     return {
//
//         addItem: () => {
//             count++
//             console.log('item added')
//         },
//         getCount: () => {
//
//             return count
//         }
//
//     }
//
//
// }
//
// const my = createCart()
// // console.log(my)
// // console.log(my.addItem)
// // console.log(my["getCount"])
//  my.addItem()
//  my.getCount()
//  console.log(my)

 // const pi = Object.defineProperty(Math , 'PI', {
 //       value: 5,
 //       writable: true,
 //       enumerable: true,
 //       configurable: true,
 // })
 // const check = Object.getOwnPropertyDescriptor(pi, 'PI')
 // console.log(check)

  // class User{
  //   constructor(email, password) {
  //       this.email = email
  //       this.password = password
  //   }
  //
  //   get password() {
  //      return  this._password.toUpperCase()
  //   }
  //   set password(value) {
  //       this._password = value
  //   }
  // }
  //
  // const p1 = new User('thisis@gmail.com' , 'abc')
  //   console.log(p1.password)

 // function User(email, password) {
 //    this._email = email
 //     this._password = password
 //
 //    Object.defineProperty(this, 'password', {
 //        get: function () {
 //            return this._password.toUpperCase()
 //        },
 //        set: function (value) {
 //            this._password = value
 //        }
 //    } )
 // }
 //
 // const p1 = new User('ajd@mad', 'abc');
 // console.log(p1.password)


// class User {
//     static totalCount = 0; // Ye "Office ka Register" hai
//
//     constructor(name) {
//         this.name = name; // Ye "Student ka ID card" hai
//         this.totalCount++;
//     }
//
//     static showRules() {
//         console.log("Follow the rules!");  // ishko classs hi acces kar sakta hau koi bhar se object nhi
//     }
//
//     sayHello() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
//
// const u1 = new User("Akarsh");

// class counter {
//     constructor() {
//         this.count = 0
//         document.querySelector('body').addEventListener('click',
//             this.increment.bind(this))
//     }
//
//     increment() {
//         this.count++
//         console.log(this.count)
//     }
//
//
// }
//
//  const p1 = new counter()
//  console.log(p1)


  // if(true){
  //     var a = 10
  //     let  b = 20
  //      b = 30
  //
  //
  // }
  //  console.log(a)





  // function outer(){  // lexical scope ka mtlb funtion inside the function acces the variable
  //     let  name = 'Akash'
  //
  //     function inner() {
  //         console.log(`inner fun: ${name}`)
  //     }
  //
  //     inner()
  // }
  //  outer()

  // function outer() {  lexical scope ka expamle
  //     let name = 'akarsh'
  //
  //     return function inner() {    return kar rhe hai inner funtion but inner hi nhi jayega pura lexical scope bhi jayega after complition exicution
  //         console.log(name)
  //     }
  //
  //
  // }
  //
  // const p1 = outer()  // global exicution context mein ye run ho kar ye pura outer funtion ka p1 ko refrence bhej dega and remove ho jayega GEC se
  //  p1()


//   class user{
//     constructor( password) {
//         this.password = password
//     }
//     get password(){
//        return   this._password.toUpperCase()
//     }
//       set password(value){
//         this._password = value
//
//       }
//
// }
//
//  const p1 = new user( 'abc')
//  console.log(p1.password)



















