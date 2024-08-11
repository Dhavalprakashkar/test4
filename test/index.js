// Q 1.What are the data types available in js?
// ans: string
// boolen
// null
// bigint
// symbol
// undefined
// number

// Q 2. Explain the difference between let const and var
// Ans : 
//           reassign                     redeclare              Scope         Hoisting 

//   var -->   it ressigns              it declares              global      it has a Hoisting

//   let -->   it resigns               it cannot be declared     block       No hoisting

//   const-->  it does not reassigns    it cannot be declared     block       No Hoisting




// Q 3. Difference between == and === in javascript?
//   ans: In == the data is being compared
//        In == the data and the datatype both are being compared 



// Q 4 Explain how prototypal inheritance work in js?

// Q 5. What are closure in js?

// Q 6. What is the difference between null and undefined?
// Ans:
//  Undefined: In Undefined we declare a value but we have not assigned the value to it

// Example:-
// var a;
// console.log(a)

// Null: A variable where we declare and assign it as a null

// Example:-
// var a=null;
// console.log(a);

// Q 7. What is the purpose of this keyword in js?

// Q 8. How does event delegation work in js?

// Q.9 What are promises and how do they work?

// Ans Promise has 3 state:
// Pending
// Resolve 
// Reject

// Promise decides that whether the code passed should be accepted or rejected 

// Example:
// const abc=new timing((resolve,reject=>{

//     setTimeout(()=>{
//         resolve(console.log("counting"));

//     },5000)

// }))

// Q 10. What is the difference between synchronous and asynchronus data?
// ans: Asynchronous: It is a handling operator that takes time such as file reading
// Synchronous: It is handling operator 


// Q 11. Explain the concept of hoisting in js?
// ans: Hoisting can only be done in var 

// Example:

// var a; --> variable name
// console.log(a)---> Print
// a; ----> declare

// Q 12. What are arrow function and how are they different from regular function?
// Ans:
// It is a compact alternative to traditional expression with same semantics difference

// Example:
// const arrow=()=>{

// }
// arrow()

// Q 13.What is event loop in javascript and how does it works?
// ans:
// Evenloop consist of 3 things i.e:-
// Callstack
// Webapi
// Callback Queue

// First code or starting is done from callstack and if have giving some setime then it goes in webapi and then in callbackqueue it then check the  lesser timing one and then proceed 


// Q 14. How can you handle errors in javascript using try-catch?
// Ans
// 6++
// try {
 
//   console.log(dhaval)
// } catch (error) {
//   console.error(error);
  
  
// }

// The code in the try block is executed first, and if it throws an exception the code in the catch block will be executed.

// Q 15 .What are javascript modules and how do they differ from traditional script tags?
// ans:
//  Modules are single function or a collection of a related function



// DSA 

// Q 1. Filtering and Tranforming Objects

// const products=[
//     {name: "Laptop", category: "Electronic", price: 1000},
//     {name: "Shirt", category: "Clothing", price: 50},
//     {name: "Phone", category: "Electronic", price: 500},
//     {name: "Shoes", category: "Clothing", price: 80},
// ];

// function xyz(product, cate){
//     var a= product.filter((pro=>{
//         return pro.category==cate
//     }))
//     console.log(a)
//     var b=a.map(str=>{
//         console.log(`${str.name},${str.price}`)
//     })
// }

// xyz(products,"Electronic")


// Q. 5 Aggregating and Sorting Data

// const transactions= [
//     {userId:1, amount:50, data:"2023-01-01"},
//     {userId:2, amount:20, data:"2023-01-02"},
//     {userId:1, amount:100, data:"2023-01-03"},
//     {userId:3, amount:150, data:"2023-01-04"},
//     {userId:2, amount:30, data:"2023-01-05"},
// ];

// function topSpenders(transactions){
//     let xi ={};
//     let ui =[];
//     for (let pay of transactions){
//         const{userId}= pay;
//         if (xi[userId]){
//             xi[userId]++;
//         }else{
//             xi[userId]=1;
//         }
//     }
//     console.log(xi)
//     let value= Object.keys(xi);
//     console.log(value);
//     for(let v of value){
//         if (xi[v]>1)ui.push((v));
//     }
// return ui;
//     }
// console.log(topSpenders(transactions))


// Q.4 Object Transformation and filtering

// const inventory=[
//     {name:"Laptop", quantity:5,price:1000},
//     {name:"Shirt", quantity:0,price:50},
//     {name:"Phone", quantity:10,price:500},
//     {name:"Shoes", quantity:3,price:80},
// ]

// function inventoryValue(inventory){
//     var total=0;
//     inventory.forEach(pr=>{
//         if(pr.quantity>0){
//             total+=(pr.quantity*pr.price)
//         }
//     })
//     console.log(total)
// }
// inventoryValue(inventory)

// Q. 6 Filtering and Mapping Arrays

// const employees=[
//     {name:"John",department:"Engineering", salary:1000},
//     {name:"Jane",department:"Marketing", salary:1500},
//     {name:"Jim",department:"Engineering", salary:500},
//     {name:"Jack",department:"HR", salary:800},
// ]

// function getHighEarningEmployees(employees){
//     var xyz=[];
//         var random=999;
//         employees.forEach(em=>{
//             if(em.salary>random){
//                 xyz.push(em.name);
    
//             }
    
//         })
//     console.log(xyz);
    
//     }
//     getHighEarningEmployees(employees);
