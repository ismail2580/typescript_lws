// 1. Explicit type 
let a:string = "ismail";
let arr1:string[] = ["ismail", "hossani", "muhammad"];



// 2. Union Types
// Normal Variable
let variable:string | number | boolean;

let arr: (string | number | boolean)[];

let obj:{
    name: string,
    age: number,
    adult: boolean
};
variable = "ismail";
arr = ["ismail", "hossain", 22, false];
arr.push("hossain", "Mohammad")
obj = {
    name: 'ismail',
    age: 23,
    adult:false
}
console.log(variable);
console.log(arr);
console.log(obj);
