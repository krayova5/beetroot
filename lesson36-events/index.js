/*Task 1 Створити HTML - сторінку для відображення / редагування тексту.При відкритті сторінки текст відображається за допомогою тега div.При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом.Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/

const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

const displayTextDiv = document.getElementById("displayText");
const editTextInput = document.getElementById("editText");

document.addEventListener("keydown", editText, false);
editTextInput.addEventListener("keydown", saveText, false);

function editText(e) {
  console.log(e.keyCode);
  if (e.keyCode === 69 && e.ctrlKey) {
    e.preventDefault();
    const text = displayTextDiv.innerText;
    displayTextDiv.classList.add("hide");
    displayTextDiv.classList.remove("show");
    editTextInput.classList.remove("hide");
    editTextInput.classList.add("show");
    editTextInput.innerText = text;
  } else {
    return;
  }
}

function saveText(e) {
  if (e.keyCode === 83 && e.ctrlKey) {
    e.preventDefault();
    const text = editTextInput.value;
    editTextInput.classList.add("hide");
    editTextInput.classList.remove("show");
    displayTextDiv.classList.add("show");
    displayTextDiv.classList.remove("hide");
    displayTextDiv.innerText = text;
  } else {
    return;
  }
}

/*Task 2 Створити HTML - сторінку з великою таблицею.При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.*/

class greatPlaces {
  constructor(name, height, place) {
    this.name = name;
    this.height = height;
    this.place = place;
  }
}

const greatPlacesList = [];
greatPlacesList.push(
  new greatPlaces("Monte Falco", 1658, "Parco Foreste Casentinesi")
);
greatPlacesList.push(
  new greatPlaces("Monte Falterona", 1654, "Parco Foreste Casentinesi")
);
greatPlacesList.push(
  new greatPlaces("Poggio Scali", 1520, "Parco Foreste Casentinesi")
);
greatPlacesList.push(
  new greatPlaces("Pratomagno", 1592, "Parco Foreste Casentinesi")
);
greatPlacesList.push(new greatPlaces("Monte Amiata", 1738, "Siena"));

const tableRows = document.getElementById("tableRows");
document.getElementById("tableHeader").addEventListener("click", sortColumn);

const ascendingColumns = {
  nameHeader: false,
  heightHeader: false,
  placeHeader: false,
};

greatPlacesList.forEach(displayTable);

function displayTable(element) {
  tableRows.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.height}</td>
                    <td>${element.place}</td>
                </tr>
                `;
}

function sortColumn(event) {
  if (event.target.id === "nameHeader") {
    greatPlacesList.sort((a, b) =>
      stringSort(a.name, b.name, ascendingColumns.nameHeader)
    );
    ascendingColumns.idHeader = !ascendingColumns.nameHeader;
  } else if (event.target.id === "heightHeader") {
    greatPlacesList.sort((a, b) =>
      stringSort(a.height, b.height, ascendingColumns.heightHeader)
    );
    ascendingColumns.nameHeader = !ascendingColumns.heightHeader;
  } else if (event.target.id === "placeHeader") {
    greatPlacesList.sort((a, b) =>
      numbersSort(a.place, b.place, ascendingColumns.placeHeader)
    );
    ascendingColumns.placeHeader = !ascendingColumns.placeHeader;
  }

  tableRows.innerHTML = "";
  greatPlacesList.forEach(displayTable);
}

function stringSort(first, second, isAsc) {
  const nameA = first.toUpperCase();
  const nameB = second.toUpperCase();

  return numbersSort(nameA, nameB, isAsc);
}

function numbersSort(first, second, isAsc) {
  if (isAsc === false) {
    if (first > second) return -1;

    if (first < second) return 1;
  } else {
    if (first < second) return -1;

    if (first > second) return 1;
  }
  return 0;
}
