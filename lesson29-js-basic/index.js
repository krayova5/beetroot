const userNameOne = 'John';
const userNameTwo = 'Frank';
const userNameThree = 'Justin';
const userNameForth = 'Gregory';

//const userNameOne = 'Jane';
//const userNameTwo = 'Rachel';
/*const userNameThree = 'Mary';
const userNameForth = 'Lucy';
const userNameFive = 'Nancy'*/


console.log(userNameTwo);

//Task 1
let userName = prompt("What is your name ?");
alert (`Hello, ${userName}`);

//Task 2
const currentYear = 2023;
let userAge = prompt("What year were you born?");
alert (`You are  ${(currentYear-userAge)}`);

//Task 3
let sideSquare = prompt("Write any length of the side of the square");
alert(`Perimeter of a square is ${sideSquare*4}`);

//Task 4
let radius = prompt ("Write any radius of the circle");
alert (`Area of a circle is ${Math.PI * radius**2}`);

//Task 5
let distance = prompt("How many kilometers are from London to Birmingham? ");
let time = prompt("How many time are you need to travel?");
alert(`You speed must be ${distance / time} km/h `);

//Task 6
const currencyRate = 0.868;
let dollarSum = prompt("Insert USD...");
alert (`EUR : ${dollarSum * currencyRate}`);
 