//1
/*

let age = prompt("Whats your age?")
age= Number.parseInt(age)
if(age>10 && age<20){
    console.log("your age lies between 10 and 20")

}
else{
    console.log("your age doesn't lies between 10 and 20")

}

*/
//2

let age=prompt("what is your age?")
switch(age){
    case 12:
        console.log("your age is 12")
        break

    case 13:
        console.log("your age is 13")
        break

    case 14:
        console.log("your age is 14")
        break
 
    case 15:
        console.log("your age is 15")
        break

    default:
        console.log("your age is special")
    

}

// 3
 
let num= prompt("what is your age?")
num =Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3")

}
else{
    console.log("Your number is not divisible by 2 and 3")

}

//4

let age =19
let a= age>18? "You can drive" : "You cannot drive"
console.log(a)