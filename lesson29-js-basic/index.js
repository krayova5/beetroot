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
const userName = prompt("What is your name ?");
alert (`Hello, ${userName}`);

//Task 2
const currentYear = 2023;
const userAge = prompt("What year were you born?");
alert (`You are  ${currentYear - userAge}`);

//Task 3
const sideSquare = prompt("Write any length of the side of the square");
const squarePerimeter = sideSquare * 4
alert(`Perimeter of a square is ${squarePerimeter}`);

//Task 4
const radius = prompt ("Write any radius of the circle");
alert (`Area of a circle is ${Math.PI * radius ** 2}`);

//Task 5
const distance = prompt("How many kilometers are from London to Birmingham? ");
const time = prompt("How many time are you need to travel?");
alert(`You speed must be ${distance / time} km/h `);

//Task 6
const currencyRate = 0.868;
const dollarSum = prompt("Insert USD...");
const euroSum = dollarSum * currencyRate;
alert(`EUR : ${euroSum}`);
 