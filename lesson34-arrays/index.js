
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

/* Task. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту.Функція приймає назву продукту і відзначає його як придбаний.

Видалення продукту зі списку(видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
Додавання покупки в список.Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову.При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
Максимум

Підрахунок суми всіх продуктів(враховуючи кількість кожного) в списку.
Підрахунок суми всіх(не) придбаних продуктів.
Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежamount від параметра функції, який вона приймає)*/

const shoppingList = [
  {
    nameProd: 'laundry detergent',
    amount: 2,
    price: 185,
    purchased: true,
    cost: function () {
      return this.amount * this.price;
    },
  },

  {
    nameProd: 'shampoo',
    amount: 2,
    price: 120,
    purchased: true,
    cost: function () {
      return this.amount * this.price;
    },
  },
  {
    nameProd: 'soap',
    amount: 6,
    price: 95,
    purchased: false,
    cost: function () {
      return this.amount * this.price;
    },
  },
  {
    nameProd: 'toothpaste',
    amount: 3,
    price: 85,
    purchased: true,
    cost: function () {
      return this.amount * this.price;
    }
  },
  {
    nameProd: 'foam for shave',
    amount: 1,
    price: 130,
    purchased: false,
    cost() {
      return this.amount * this.price;
    },


  }
]

shoppingList.sort();

/*addProductToList() {
  this.purchased = true;
  this.amount += 1;
  reloadOneProduct(this)
  cost();
}*/








