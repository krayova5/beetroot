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
  drivers: ["Max", "John", "Steve", "Bob"],

  showCar() {
    console.log(userCar);
  },

  giveDriver(newDriver) {
    this.drivers.push(newDriver);
  },

  checkDriver(someDriver) {
    this.drivers.includes(someDriver);
  },

  tripCar(distance) {
    let timeCar;
    timeCar = distance / this.speed;
    let rest = Math.floor(timeCar / 4);
    timeCar = timeCar + rest;
    return timeCar;
  },
  amountFuel(distance) {
    let totalFuel;
    totalFuel = (distance * this.fuel / 100).toFixed(1);
    return totalFuel;
  },
};
userCar.showCar();

userCar.giveDriver("Leon");

userCar.checkDriver();

userCar.tripCar();

userCar.amountFuel();

console.log(userCar.checkDriver("Max"));

console.log(userCar.tripCar(400));

console.log(userCar.amountFuel(400));