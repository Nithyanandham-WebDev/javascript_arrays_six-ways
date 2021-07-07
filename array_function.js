
// 6 ways to use spread with arrays

// const { func } = require("prop-types");

// array manipulation merge array

const array1 = [1,2,3];
const array2 = [4,5,6];

const attempttomerage = [array1,array2];
console.log(attempttomerage);

const mergedarray = [...array1,...array2];
console.log(mergedarray);

// array manipulation clonearray

const original = [0,1];
const newarray = [...original];

console.log(original);
console.log(newarray);

newarray[1] = "something";

console.log(newarray);
console.log(original);

// iterables to array


const somestring = "hello world!";
const array = [...somestring];

console.log(array)

// iterables to array 
// set - array

const set = new Set([1,2,3,4,5,6]);
console.log(set);

const array11 = [...set];
console.log(array11);

// node list array

const node  = document.querySelectorAll("p");
console.log(node);

const array12 = [...node];
console.log(array12);

// arguments in array
// function sayhello(name){
//     console.log(`hello,$(name)`);
// }
// sayhello("nithya");
// sayhello("viewa");
// sayhello("machine");

function sayhello(){
    const argumentarray = [...arguments];
    console.log(arguments);
    for (argument of argumentarray){
        console.log(`hello,${arguments}`);
    }
}
sayhello("hello","world","devloper");

