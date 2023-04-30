//Task 1
const firstNum = 0.1;
const secondNum = 0.2;
const sum = (firstNum + secondNum).toFixed(1);
console.log(sum);

//Task 2
const string = "1";
const number = 2;
const sum1 = +string + number;
console.log(sum1);

//Task 3

const volume = 820;
const volumeFlashCard = prompt("If the flash drive size is " );
const amountFiles = Math.floor(volumeFlashCard * 1024 / volume);
alert(`You can save ${amountFiles} files`);

//Task 4
const moneySum = prompt ("How much money you have ?");
const sweetsPrice = prompt ("What is the price of chocolates ?");
const amountChoco = Math.floor(moneySum / sweetsPrice);
const rest = moneySum - Math.floor(moneySum / sweetsPrice) * sweetsPrice;
alert(`You can have ${amountChoco} chocolates 
and ${rest} USD`);

//Task 5

const userNumber = prompt("Would do you say three digit number ? ");
const reverseNumber = userNumber.split("");
alert(`You reverse number is ${reverseNumber.reverse().join('')}`);

