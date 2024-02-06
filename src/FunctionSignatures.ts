let userDetails : (id:number | string, userInfo:{
    name: string,
    age: number
}) => void;

userDetails = (a:number | string, user:{name:string, age:number})=>{
    console.log(`${a}, ${user.name}`)
}