
/*Task 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

 const userAge = prompt ("How old are you ?");

 if (userAge <= 11) {
  console.log("You are a child.");

 } else if( userAge > 11 ,  userAge <= 17) {
   console.log("You are a teenager.");
  
 } else if (userAge > 17, userAge <= 59) {
   console.log("You are an adult.");
 } else 
   console.log("You are a retiree.");*/


/*Task 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

/*const userNumber = prompt("What is you number from 0 to 9?");
switch (userNumber) {
  case '0':
    console.log("symbol = )");
    break;
  case '1':
    console.log("symbol = !");
    break; break;
  case '2':
    console.log("symbol = @");
    break;
  case '3':
    console.log("symbol = #");
    break;
  case '4':
    console.log("symbol = $");
    break;
  case '5':
    console.log("symbol = %");
    break;
  case '6':
    console.log("symbol = ^");
    break;
  case '7':
    console.log("symbol = &");
    break;
  case '8':
    console.log("symbol = *");
    break;
  case'9':
    console.log("symbol = (");
    break;
  default:
    console.log("Invalid value");
    break;
}

/*Task  Підрахуй суму всіх чисел в заданому користувачем діапазоні.*/

 const userRange = prompt("Set digital range ");
let sum = item[0];
for (const item of userRange) {
  sum = sum + item
}
console.log(sum);

//Task 1
/*let a = 0.1;
let b = 0.2;
console.log((a + b).toFixed(1));

//Task 2
let c = "1";
let d = 2;
console.log( +c + d );

//Task 3

/let volume = 820;
let volumeFlashCard = prompt("If the flash drive size is " )
alert (`You can save ${Math.floor(volumeFlashCard*1024/volume)} files`);

//Task 4
let moneySum = prompt ("How much money you have ?");
let sweetsPrice = prompt ("What is the price of chocolates ?");
alert(`You can have ${(Math.floor(moneySum / sweetsPrice))} chocolates and ${(moneySum-(Math.floor(moneySum/ sweetsPrice)) * sweetsPrice)} USD`);

//Task 5

const userNumber = prompt("Would do you say three digit number ? ");
let reverseNumber = userNumber.split("");
alert(`You reverse number is ${reverseNumber.reverse().join('')}`);

/
/*const usersAges = { Randi: 4, Godfrey: 39, Lelia: 45, Jacey: 74, Keira: 30 };

for( const item in usersAges)
console.log(`Object key: ${item}; "object value:" ${usersAges[item]}`);

const usersAge = { Destany: 41, Ashleigh: 3, Ollie: 31, Felton: 40, Alana: 36 };
for (const item in usersAges)
  console.log(`Object key: ${item}; "object value:" ${usersAges[item]}`);*/

/*const someString = [
  'H', 'e', 'l', 'l',
  'o', ' ', 'W', 'o',
  'r', 'l', 'd'
];
 for (const item of someString) {
  console.log(item);
 }
 const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let sum = 0
for (const item of numbersList) {
  sum = sum + item
//sum += item
 }
console.log(sum);

const fruit = "watermelon";

 fruit === "watermelon"
 ? console.log("This is watermelon")
 :console.log("Other fruit");

 fruit !== "watermelon"
 ? console.log("Other fruit")
: console.log("This is watermelon");

const email = "someEmail@gmail.com";
const adminEmail = "admin@gmail.com";

email === adminEmail
? console.log("Hello user"):
  console.log(`I don't know you ${email}`);

  const mark = prompt("Your mark is ...")*/
