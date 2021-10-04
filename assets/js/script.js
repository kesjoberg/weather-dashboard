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
var savedCity = document.querySelector('#savedCities');
var li = document.createElement('li');


var allTheCities = JSON.parse(localStorage.getItem("allTheCities")) || [];
  
//Variables
var apiKey = "a9d77957715e35e2e14953e9f47c0313";
var city;
var lat;
var lon;
var currentDay= moment().format('L');



// listSavedCities();
// function listSavedCities(city) {
//   var pastCities = JSON.parse(localStorage.getItem('allTheCities')) || [];
//   var newCity = city;
//   pastCities.push(newCity);
//   localStorage.setItem('allTheCities', JSON.stringify(pastCities));
// }


function getCity () {
  searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    var city = citySearch.value.trim();
    var newCity = city;
    // console.log(city);
    // savedCities = [];
    // allTheCities.push(newCity);
    localStorage.setItem('allTheCities', JSON.stringify(newCity));
    
    getLatLon (city);
    // listSavedCities(city);
  })  
};
  

function getLatLon(city) {
  var queryCityURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
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
  var queryOnecallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" +lat+ "&lon=" + lon + "&units=imperial&appid="+apiKey;
  fetch(queryOnecallURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.current.weather[0].icon);
     

      var weatherCode = data.current.weather[0].icon;
      
      iconSpan.src = "https://openweathermap.org/img/wn/"+weatherCode+"@2x.png";
      tempSpan.textContent = data.current.temp;
      windSpan.textContent = data.current.wind_speed;
      humiditySpan.textContent = data.current.humidity;
      uviSpan.textContent = data.current.uvi;
      if (data.current.uvi < 2){
        $('#uviSpan').addClass('favorable'); 
      } else 
      if (data.current.uvi <7){
        $('#uviSpan').addClass('moderate');
      } else {
        $('#uviSpan').addClass('severe');
      }
    
      
      document.getElementById("fDate-1").textContent = moment().add(1, "days").format('l');
      document.getElementById("fIcon-1").src = iconSpan.src = "https://openweathermap.org/img/wn/"+data.daily[0].weather[0].icon+"@2x.png"; 
      document.getElementById("fTemp-1").textContent = data.daily[0].temp.max;
      document.getElementById('fWind-1').textContent = data.daily[0].wind_speed;
      document.getElementById("fHumidity-1").textContent = data.daily[0].humidity;

      document.getElementById("fDate-2").textContent = moment().add(2, "days").format('l');
      document.getElementById("fIcon-2").src = iconSpan.src = "https://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+"@2x.png"; 
      document.getElementById("fTemp-2").textContent = data.daily[1].temp.max;
      document.getElementById('fWind-2').textContent = data.daily[1].wind_speed;
      document.getElementById("fHumidity-2").textContent = data.daily[1].humidity;

      document.getElementById("fDate-3").textContent = moment().add(3, "days").format('l');
      document.getElementById("fIcon-3").src = iconSpan.src = "https://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+"@2x.png"; 
      document.getElementById("fTemp-3").textContent = data.daily[2].temp.max;
      document.getElementById('fWind-3').textContent = data.daily[2].wind_speed;
      document.getElementById("fHumidity-3").textContent = data.daily[2].humidity;

      document.getElementById("fDate-4").textContent = moment().add(4, "days").format('l');
      document.getElementById("fIcon-4").src = iconSpan.src = "https://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+"@2x.png"; 
      document.getElementById("fTemp-4").textContent = data.daily[3].temp.max;
      document.getElementById('fWind-4').textContent = data.daily[3].wind_speed;
      document.getElementById("fHumidity-4").textContent = data.daily[3].humidity;

      document.getElementById("fDate-5").textContent = moment().add(5, "days").format('l');
      document.getElementById("fIcon-5").src = iconSpan.src = "https://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+"@2x.png"; 
      document.getElementById("fTemp-5").textContent = data.daily[4].temp.max;
      document.getElementById('fWind-5').textContent = data.daily[4].wind_speed;
      document.getElementById("fHumidity-5").textContent = data.daily[4].humidity;
    })
  $('.card').addClass('show');  
  

}


getCity();