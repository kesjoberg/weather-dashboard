//Selectors
var searchBtn = document.querySelector('#searchBtn');
var citySearch = document.querySelector('#citySearch');
// var savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];



fetch("http://api.openweathermap.org/data/2.5/weather?q=minneapolis&units=imperial&appid=a9d77957715e35e2e14953e9f47c0313")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp)
    // console.log(data.wind.speed)
    // console.log(data.main.humidity)
    // console.log(weather.array[0].main)//clouds does not work
  })


  fetch("http://api.openweathermap.org/data/2.5/forecast?q=minneapolis&units=imperial&appid=a9d77957715e35e2e14953e9f47c0313")
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      console.log(data);
    })

  
// //Variables
// var apiKey = "a9d77957715e35e2e14953e9f47c0313";
// var city;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;



// var getCity = function (event) {
//     event.preventDefault();

//     var city = citySearch.value.toLowerCase().trim();
//     console.log(city);
//     getApi(city);
// };
  

// var getApi = function() {
//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
      
    
//       }
//     );
// }



// getCity();

// //onclick

