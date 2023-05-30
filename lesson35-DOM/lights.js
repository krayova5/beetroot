//Task 3 Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const trafficLights = document.querySelector(".traffic-lights");

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
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