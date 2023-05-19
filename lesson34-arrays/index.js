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
Максимум*/

const shoppingList = [
  {
    nameProd: "laundry detergent",
    amount: 2,
    price: 185,
    bought: true,
    cost() {
      let costProduct;
      costProduct = this.amount * this.price;
      return costProduct;
    },
  },

  {
    nameProd: "shampoo",
    amount: 2,
    price: 120,
    bought: true,
    cost() {
      let costProduct;
      costProduct = this.amount * this.price;
      return costProduct;
    },
  },
  {
    nameProd: "soap",
    amount: 6,
    price: 95,
    bought: false,
    cost() {
      let costProduct;
      costProduct = this.amount * this.price;
      return costProduct;
    },
  },
  {
    nameProd: "toothpaste",
    amount: 3,
    price: 85,
    bought: true,
    cost() {
      let costProduct;
      costProduct = this.amount * this.price;
      return costProduct;
    },
  },
  {
    nameProd: "foam for shave",
    amount: 1,
    price: 130,
    bought: false,
    cost() {
      let costProduct;
      costProduct = this.amount * this.price;
      return costProduct;
    },
  },
];


console.log(shoppingList);

const res = shoppingList.slice();
const compare = (someProduct, anotherProduct) => {
  if (someProduct.bought === false && anotherProduct.bought === true) return -1;
  if (someProduct.bought === true && anotherProduct.bought === false) return 1;
  return 0;
};

console.log(res.sort(compare));

const buyProduct = (name) => {
  const product = {};
  product.name = name;
  product.amount = 1;
  product.bought = true;
  for (let item in res) {
    const newProduct = res[item].name;
    if (newProduct.toLowerCase() == name.toLowerCase()) {
      res[item].bought = true;
      break;
    } else if (newProduct.toLowerCase() != name.toLowerCase()) {
      res.unshift(product);
      break;
    }
  }
};
buyProduct("Coconut oil");
res.sort(compare);

/*const addPurchase = (name, amount, price) => {
  let product = {};
  product.name = name;
  product.amount = amount;
  product.price = price;
  product.bought = true;
  for (let i in res) {
    const newProduct = res[i].name;
    if (newProduct.toLowerCase() == name.toLowerCase()) {
      res[i].amount += amount;
      res[i].bought = true;
      break;
    } else if (newProduct.toLowerCase() != name.toLowerCase()) {
      res.unshift(product);
      break;
    }
  }
  return res;
};

addPurchase("face cream", 1, 200);*/
