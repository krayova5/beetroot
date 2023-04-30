//Task 1
let a = 0.1;
let b = 0.2;
console.log((a + b).toFixed(1));

//Task 2
let c = "1";
let d = 2;
console.log( +c + d );

//Task 3

let volume = 820;
let volumeFlashCard = prompt("If the flash drive size is " )
alert (`You can save ${Math.floor(volumeFlashCard*1024/volume)} files`);

//Task 4
let moneySum = prompt ("How much money you have ?");
let sweetsPrice = prompt ("What is the price of chocolates ?");
alert(`You can have ${(Math.floor(moneySum / sweetsPrice))} chocolates 
and ${(moneySum-(Math.floor(moneySum/ sweetsPrice)) * sweetsPrice)} USD`);

//Task 5

const userNumber = prompt("Would do you say three digit number ? ");
let reverseNumber = userNumber.split("");
alert(`You reverse number is ${reverseNumber.reverse().join('')}`);

