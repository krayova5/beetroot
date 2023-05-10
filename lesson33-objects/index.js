/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.*/

const userCar = {
  produce: "Toyota",
  model: "Hi-Ace",
  year: 1998,
  speed: 100,
  volume: 40,
  fuel: 15,
  drivers: ['Max', 'John', 'Steve', 'Bob'],

  showCar() { 
    console.log(userCar); 
  },
  
  giveDriver(newDriver) {
    this.drivers.push(newDriver);
    
  },
  
  checkDriver(someDriver) {
    this.drivers.includes(someDriver);
    
 },

 } 
userCar.showCar();

userCar.giveDriver('Bill');

userCar.checkDriver("Bob");


let timeCar = (distance) => (distance / userCar.speed).toFixed(1);
let n;
if ( n = 1, timeCar == n * 4) {
  timeCar = timeCar + 1 * n;
}
console.log(timeCar(1050));

let amountFuel = (distance) => (distance * userCar.fuel / 100).toFixed(1);

console.log(amountFuel(1050));



/*for (let key in userCar) {
  console.log(userCar[key]);};*/



 
