"use strict";
// 1. Explicit type 
let a = "ismail";
let arr1 = ["ismail", "hossani", "muhammad"];
// 2. Union Types
// Normal Variable
let variable;
let arr;
let obj;
variable = "ismail";
arr = ["ismail", "hossain", 22, false];
arr.push("hossain", "Mohammad");
obj = {
    name: 'ismail',
    age: 23,
    adult: false
};
console.log(variable);
console.log(arr);
console.log(obj);
