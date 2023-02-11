//1

const sentence ='The quick brown fox jumps over the lazy dog.';
const word ='fox2';
console.log(sentence.includes(word))
console.log(`The word "${word} "${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// 2

console.log(word.toLowerCase())
console.log(word.toUpperCase())

// 3

let str2 ="Please give Rs 1000"
let amount =Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)


// 4

let friend ="Deepika"
friend[3] ="R"
console.log(friend) // friend is not changed, because string is immutable