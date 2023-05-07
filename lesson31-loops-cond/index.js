
//Task 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

const userAge = prompt ("How old are you ?");

if (userAge >= 0 , userAge <= 11) {
 console.log("You are a child.");

} else if( userAge > 11 ,  userAge <= 17) {
  console.log("You are a teenager.");
 
} else if (userAge > 17 , userAge <= 59) {
  console.log("You are an adult.");
} else if (userAge > 59) 
  {console.log("You are a retiree.");
 } else 
 console.log( "Invalid value");



/*Task 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

const userNumber = prompt("What is you number from 0 to 9?");
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

/*Task 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.*/

const userMin = +prompt("Set minimum number");
const userMax = +prompt("Set maximum number");
let total = 0;
for (let item = userMin; item <= userMax; item++) {
  total = total + item;
}
console.log(total);
       
  

/*Task 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/

/*const firstNum = +prompt("Set first number.");
const secondNum = +prompt("Set second number.");


while (firstNum !== secondNum) {
  let nsd;
  if (firstNum > secondNum) {
    firstNum = firstNum - secondNum;
  } else if (firstNum < secondNum) {
    secondNum = secondNum - firstNum;
  } else (firstNum === secondNum); {
     nsd = firstNum === secondNum;
    console.log(nsd);
  } 
}

/*Task 5 Запитай у користувача число і виведи всі дільники цього числа.*/

const userNum = +prompt("Set number.");
for (let item = 1; item <= userNum; item++) {
  if (userNum % item == 0) {
    console.log(`Дільники: ${item}`);
  }
}
 /* const usersAge = { Randi: 4, Godfrey: 39, Lelia: 45, Jacey: 74, Keira: 30 };

for( const item in usersAges)
console.log(`Object key: ${item}; "object value:" ${usersAges[item]}`);


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
/*? console.log("This is watermelon")
:console.log("Other fruit");

fruit !== "watermelon"
/*? console.log("Other fruit")
: console.log("This is watermelon");

const email = "someEmail@gmail.com";
const adminEmail = "admin@gmail.com";

email === adminEmail
/*? console.log("Hello user"):
console.log(`I don't know you ${email}`);

const mark = prompt("Your mark is ...")*/

