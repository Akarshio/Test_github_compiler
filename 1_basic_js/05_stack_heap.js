// primitive datatype value store in stack,
// when we change the value then changing in copies.

let name1 = "Ram"
let stuName = name1
 stuName = "Akarsh"

 console.log(name1)
 console.log(stuName)

 // non primitivie always store in heap memory , 
 // when we change the value then original value also change.

 let data = {
    name: 'Sonu',
    email: 'sonu@gmail.com',
    upi: 'sonu123@axis'
 }

 let newdata = data
 newdata.upi = 'sonu234@paytm'

 console.log(data);
 console.log(newdata);
 
 
