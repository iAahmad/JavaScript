// Chapter 1 -Q1

// Create a Variable o ftype String add try to add a number to it.


let a= "Abbas"
let b=6
console.log(a+b)

// Question 2

// Use type of operator to find the datatype of the string in last question

// let a= "Abbas"
// let b=6
// console.log(a+b)

console.log(typeof (a+b))




// Question 3

// Create a Const object in javascript can you change it to hold a number later?

 const a1 ={
    name:"Abbas",
    section: 1,
    isPrincipal: false

 }
//  a=54

// No Const Object in javascript  cannot change it to hold a number

//Question 4

// Try to Add a New Key to the Const object in Problem 3 were you able to do it?

a1['friend'] ="Shubham"
a1['name']="Lovish"
console.log(a1)


//Question 5

// Write a js Program to Create a Word-Meaning Dictionary of 5 words.

const dict={
    appriciate: "recognize thee full worth of.",
    xeriscaping: "environmental design of residential and park land using various methods for minimizing the need for water use.",
    bobèche:"a slightly cupped ring placed over the socket of a candleholder to catch the drippings of a candle.",
}

console.log(dict['bobèche'])

