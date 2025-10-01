const apiKey = "f00c38e0279b7bc85480c3fe775d518c"; 

// -----------------------------
// Lấy các phần tử HTML
const cityInput    = document.getElementById("cityInput");
const searchBtn    = document.getElementById("searchBtn");
const locationBtn  = document.getElementById("locationBtn");
const weatherResult = document.getElementById("weatherResult");

// -----------------------------------
// Hiển thị kết quả ra giao diện
function displayWeather(data) {
  const { name, main, weather } = data;
  const temp = main.temp.toFixed(1);
  const icon = weather[0].icon;
  const description = weather[0].description;

  weatherResult.innerHTML = `
    <h4>${name}</h4>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon"/>
    <p class="mb-0">${description}</p>
    <p><strong>${temp}°C</strong></p>`;
}


searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
weatherResult.innerHTML = "<p class='text-danger'>Please enter city name!</p>";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(displayWeather)
    .catch(err => {
      weatherResult.innerHTML = `<p class="text-danger">${err.message}</p>`;
    });
});


locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=vi`)
          .then(res => res.json())
          .then(displayWeather)
          .catch(err => {
            weatherResult.innerHTML = `<p class="text-danger">${err.message}</p>`;
          });
      },
      () => {
        weatherResult.innerHTML = "<p class='text-danger'>Unable to get location (rejected or error).</p>";
      }
    );
  } else {
    weatherResult.innerHTML = "<p class='text-danger'>Your browser does not support geolocation.</p>";
  }
});