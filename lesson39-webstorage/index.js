// Функція для отримання погоди з OpenWeather API

async function getWeather() {
  const apiKey = '3fe17f75164d18b5fabf748e2c2a3665';
  const city = 'Cherkasy';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Перевірка, чи пройшло менше 2 годин з останнього запиту

  const lastRequestTime = localStorage.getItem('lastRequestTime');
  if (lastRequestTime) {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - parseInt(lastRequestTime, 10);
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    if (hoursDiff < 2) {
      // Завантажуємо дані з localStorage

      const weatherData = localStorage.getItem('weatherData');
      if (weatherData) {
        displayWeather(JSON.parse(weatherData));
        return;
      }
    }
  }

  // Виконуємо запит до OpenWeather API
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Зберігаємо дані у localStorage
    localStorage.setItem('weatherData', JSON.stringify(data));
    localStorage.setItem('lastRequestTime', new Date().getTime().toString());
    displayWeather(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

// Функція для відображення погоди
function displayWeather(weatherData) {
  const temperature = weatherData.main.temp;
  const description = weatherData.weather[0].description;

  console.log('Temperature:', temperature);
  console.log('Description:', description);

  // Тут ви можете оновити вашу сторінку або відобразити дані погоди у потрібний спосіб
}

// Виклик функції отримання погоди
getWeather();

const API_KEY = "3fe17f75164d18b5fabf748e2c2a3665";
https: //api.openweathermap.org / data / 3.0 / onecall ? lat = { lat } & lon={ lon }& exclude={ part }& appid={ 3fe17f75164d18b5fabf748e2c2a3665}
gettigWeather = async () => {
  const api
}