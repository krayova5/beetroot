// Task 1 Створити сторінку, що показує нумерований список пісень:
const playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];
const mainList = document.createElement("ul");
const container = document.querySelector(".content");
container.append(mainList);
for (let item in playList) {
  const mainListItems = document.createElement("li");
  const button = document.createElement("p");
  button.append(playList[item].author);
  button.append(" : ");
  button.append(playList[item].song);
  mainListItems.append(button);
  mainList.append(mainListItems);
}

// Task 2 Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const btn = document.createElement("button");
btn.style.border = "solid 2px";

const paragraph = document.createElement("p");
paragraph.textContent = "Відкрити";
paragraph.style.padding = "10px";
btn.append(paragraph);
container.append(btn);

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent = "Закрий мене, будь ласка";
  div.append(p);
  const innerBtn = document.createElement("button");
  innerBtn.style.border = "solid 2px";
  const innerBtnParagraph = document.createElement("p");
  innerBtnParagraph.textContent = "Закрити";
  innerBtnParagraph.style.padding = "10px";
  innerBtn.append(innerBtnParagraph);
  div.append(innerBtn);
  container.append(div);
  btn.disabled = true;
  innerBtn.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});

//Task 3 Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const trafficLights = document.querySelector(".traffic-lights");

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  if (redLight.classList.contains("traffic__red")) {
    redLight.classList.remove("traffic__red");
    yellowLight.classList.add("traffic__yellow");
  } else if (yellowLight.classList.contains("traffic__yellow")) {
    yellowLight.classList.remove("traffic__yellow");
    greenLight.classList.add("traffic__green");
  } else if (greenLight.classList.contains("traffic__green")) {
    greenLight.classList.remove("traffic__green");
    redLight.classList.add("traffic__red");
  }
});
