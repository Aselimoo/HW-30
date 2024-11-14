// Домашнее задание к уроку №30: “Операторы в JavaScript”

// 1 задание

let a = 10;
let b = 5;
let c = 2;

console.log(a + b + c);
console.log((a + c) - b);
console.log(a * b / c);
console.log(a % b);


// 2 задание

// let x = 7;
// console.log(++x + x++); 
// console.log(--x - x--);


// 3 задание

console.log("The result is: " + (4 + 5));


// 4 задание

console.log(a > b && a > 0 && b > 0);
console.log(c < 10 || c === 2);
console.log(a / c !== 5);


// 5 задание

console.log(10 == "10"); 
/* Двойное равенство сравнивает только значения данных, поэтому несмотря на то, что мы сравниваем number и string, 
их значение одинаковы, поэтому результат - true.
*/
console.log(10 === "10"); 
/* Строгое равенство сравнивает не только значения данных, но и их типы. 
Так как мы сравниваем number и string, результат - false.
*/


// 6 задание

x = 20;
let y = 8

console.log((x % 2 === 0 || x % 3 === 0) || x % 6 === 0);
console.log(y > 10 || y < 5);




