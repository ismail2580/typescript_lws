let func:Function;//that's the Function Type


function myfunc (name:string, age:number, adult?:boolean):void{
    // return name + age + adult// it's error cuse that not void

    console.log(`My Name is ${name}, I am ${age} Years old and Adult${adult}`)
}

myfunc("ismail Hossain", 23, true)


// that function return Should be  number
function returnFunc (CGPA:number, RollNo:number):number{
    return CGPA + RollNo;

};

console.log(returnFunc(4,120))