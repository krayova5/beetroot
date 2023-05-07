//Task 1
let a = 0.1;
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

/*const dog = {
paws: 4,
tail: 1,
color: "grey",
breed: "terrier",
name: "Bob",
sound: () => {
  console.log("uuu-uuu");
},
}*/
/*const doggy = {
  name: "Rox",
  color: "brown",
  paws: { right: 2, left: 2, },
  toys: [],

  sound: () => {
    console.log('Гав-гав!');
  },

  giveToy(newToy) {
    this.toys.push(newToy)
  },

  showToy() {
    console.log(this.toys);
  },

  takeToy() {
    this.toys = [];
  }
}