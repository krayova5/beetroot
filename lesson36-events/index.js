//Task 1 Створити HTML - сторінку для відображення / редагування тексту.При відкритті сторінки текст відображається за допомогою тега div.При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

/*document.body.addEventListener("keydown", (event) => {
  const resizer = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Comma") && event.ctrlKey) {
    event.returnVal = false;
    let elem = document.querySelector(".content__textarea");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.setAttribute("cols", 50);
      newEl.setAttribute("rows", 20);
      newEl.className = "content__textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Comma" && elem.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      newEl.className = "content__textarea";
      newEl.textContent = elem.value;
      resizer.className = "content__textarea-resizer";

      const initResize = e => {
        e.preventDefault;
        window.addEventListener("mousemove", startResize);
        window.addEventListener("mouseup", stopResize);
      };

      const startResize = e => {
        newEl.style.width = (e.clientX - newEl.offsetLeft) + "px";
      };
      const stopResize = e => {
        window.removeEventListener('mousemove', startResize);
        window.removeEventListener('mouseup', stopResize);
      };

      resizer.addEventListener("mousedown", initResize);
      newEl.append(resizer);
      elem.replaceWith(newEl);
    }
  }

});*/

/*Task 2 Створити HTML - сторінку з великою таблицею.При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.*/

let mountains = [
  { name: "Monte Falco",
   height: 1658, 
   place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", 
  height: 1654, 
  place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali",
   height: 1520, 
   place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", 
  height: 1592, 
  place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", 
  height: 1738, 
  place: "Siena" },
];

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);

const getCellValue = (tr, i) => tr.children[i].innerText || tr.children[i].textContent;

const comparer = (i, asc) => (a, b) => ((v1, v2) =>
  v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, i), getCellValue(asc ? b : a, i));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
  const table = th.closest('table');
  Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
    .forEach(tr => table.appendChild(tr));
})));

























    ]









































