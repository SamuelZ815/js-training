// // Function declaration
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet('shaun'));

// // Function expression
// const speak = function(name) {
//     return `Good day, ${name}!`;
// }
// console.log(speak('mario'));

// const speak2 = function(name = 'luigi', time = 'night') {
//     return `Good ${time}, ${name}!`;
// }
// speak2();
// console.log(speak2());
// console.log(speak2('shaun'));
// console.log(speak2('mario', 'morning'));

// returning values
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log('area is:', area);

// const calcVol = function(area) {
//     return area * 10;
// }

// //arrow function
// const calcArea2 = radius => 3.14 * radius**2;
// const area2 = calcArea2(5);
// console.log('area2 is:', area2);

//practice arrow functions
// const bill = function(products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// const bill2 = (products, tax) => {
//     let total = 0; 

//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill3 = (products, tax) => {
//     let total = 0;  
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));
// console.log(bill2([10, 15, 30], 0.2));
// console.log(bill3([10, 15, 30], 0.2));

// const name = 'shaun';

// // function
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// // method
// name.toUpperCase();
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//callbacks and foreach
// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     //do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person);
// });

//get a reference to the 'ul' element
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);