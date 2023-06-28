
/* Task 1. Напиши всі можливі варіанти створення функцій.

1) function greet() {
  alert('Hello World!');
}

greet();

2) let greet = function () {
  alert('Hello World!');
};

greet();

3) let getRectArea = (width, height) => width * height;

console.log(getRectArea(24, 5));*/

// Task 2 Cтвори функцію, яка буде виводити кількість переданих їй аргументів.

function showArg(...arg) {
  console.log(arg);
}

showArg(1, 2, 5,'gap');

//Task 3 Напиши функцію, яка приймає 2 числа і повертає:-1, якщо перше число менше, ніж друге; 1 - якщо перше число більше, ніж друге;0 - якщо числа рівні.*/

function getNumbers(numberOne, numberTwo) {
  if (numberOne < numberTwo) {
    return -1;
  } else if (numberOne > numberTwo) {
    return 1;
  } else {
    return 0
  }
}
console.log(getNumbers(3, 3));

//Task 4 Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(10));

// Task 5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function showNumber(firstNumber, secondNumber, thirdNumber) {
  let number = (firstNumber * 100) + (secondNumber * 10) + thirdNumber;
  return number;
}
showNumber();
console.log(showNumber(1, 6, 1));


//Task 6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let getRectArea = (width, height = width) => width * height;

console.log(getRectArea(5));




