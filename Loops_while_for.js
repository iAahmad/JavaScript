// program to add first n natural numbers
let sum =0
let n=prompt("Enter the value of n ")
n= Number.parseInt(n)

for(let i = 0; i < 5; i++){
    sum+=(i+1)
    console.log((i+1), "+")
}
console.log(n+sum)


//

let obj ={
    harry:90,
    shubh: 45,
    shivika: 56,
    ritik: 57,
    shiv: 23
}

// for in loop
for(let a in obj){
    console.log("Marks of " + a + "are" +obj[a])
}

// for of loop

for(let b of "Harry")[
    console.log(b)
]