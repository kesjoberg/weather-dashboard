//Selectors
var searchBtn = document.querySelector('#searchBtn');
var citySearch = document.querySelector('#citySearch');
var citySpan = document.querySelector('#citySpan');
var dateSpan = document.querySelector('#dateSpan');
var iconSpan = document.querySelector('#iconSpan');
var tempSpan = document.querySelector('#tempSpan');
var windSpan = document.querySelector('#windSpan');
var humiditySpan = document.querySelector('#humiditySpan');
var uviSpan = document.querySelector('#uviSpan');



// var savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];
  
//Variables
var apiKey = "a9d77957715e35e2e14953e9f47c0313";
var city;
var lat;
var lon;
var currentDay= moment().format('L');


function getCity () {
  searchBtn.addEventListener('click', function(event){
    event.preventDefault();

    var city = citySearch.value.toLowerCase().trim();
    // console.log(city);
    getLatLon (city);
  })  
};
  

function getLatLon(city) {
  var queryCityURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
  console.log(city);
  fetch(queryCityURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      var lat = data.coord.lat;
      var lon = data.coord.lon;

      citySpan.textContent= data.name;
      dateSpan.textContent= currentDay;
      getCityWeather(lat, lon)
      }
    );
}

function getCityWeather(lat, lon) {
  var queryOnecallURL = "http://api.openweathermap.org/data/2.5/onecall?lat=" +lat+ "&lon=" + lon + "&units=imperial&appid="+apiKey;
  fetch(queryOnecallURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.current.weather[0].icon);

      var weatherCode = data.current.weather[0].icon;
      
      iconSpan.src = "http://openweathermap.org/img/wn/"+weatherCode+"@2x.png";
      tempSpan.textContent = data.current.temp;
      windSpan.textContent = data.current.wind_speed;
      humiditySpan.textContent = data.current.humidity;
      uviSpan.textContent = data.current.uvi;
    })
  $('.card').addClass('show');  
}
getCity();

// //onclick

