let marks={
    ali:90,
    naman:9,
    shubham:56,
    monika:6

}

// problem no. 2

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of" +Object.keys(marks)[i]+ "are" +marks[Object.keys(marks)[i]])
}

// problem no. 3

for(let key in marks) {
    console.log("The marks of" +key + "are" +marks[key])
}

// Problem no. 4

let cn =4
let i
while (i!=cn) {
    i=prompt("enter a number")
    console.log("Try again")

}
console.log("you have entered a correct number")

// problem no. 5

const mean =() =>{
    return (a+b+c+d)/4
}

console.log(4,5,6,7)