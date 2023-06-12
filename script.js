const kelvin = 273; // define the kelvin variable

function getWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=6d055e39ee237af35ca066f35474e9df"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      document.getElementById("temp").innerHTML =
        Math.floor(data.main.temp - kelvin) + "°C";
      document.getElementById("max_temp").innerHTML =
        Math.floor(data.main.temp_max - kelvin) + "°C";
      document.getElementById("min_temp").innerHTML =
        Math.floor(data.main.temp_min - kelvin) + "°C";
      document.getElementById("wind_speed").innerHTML = data.wind.speed;
      document.getElementById("wind_degrees").innerHTML = data.wind.deg;
      document.getElementById("main").innerHTML = data.weather[0].main;
      document.getElementById("description").innerHTML =
        data.weather[0].description;
      icon1 = data.weather[0].icon;
      // console.log(icon1);
      document.getElementById("myImg").src =
        "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";
      document.getElementById("cityName").innerHTML = city;
    })
    .catch((error) => {
      console.error(error);
      alert("City Not Found");
    });
}

const form = document.querySelector("#form");
// console.log(form); // check if the form element exists
if (form) {
  const cityInput = document.querySelector("#city");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the page from refreshing
    const city = cityInput.value; // get the value of the input field
    getWeather(city);// use the city value to get the weather data
  }
  
  );
  
}

getWeather("kolkata")
