let a = prompt("Hey what's your age?");
// console.log(typeof a)
a=Number.parseInt(a);
if(a<0){
    alert("This is an invalid age");

}
else if(a<9){
    alert("you are a kid and you cannot even think of driving");

}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18");

}
else{
    alert("You can now drive as you are above 18");

}
console.log("Done")

// Switch Statement

console.log("You can", (a<18? "not drive" :"drive"))