//5c6e1425d7ae9ef9ee8b2d6a28ba77f3 api key
let weatherEl = document.querySelector("#city-form");
let cityEl = document.querySelector("#city");
let fiveDayForecast = document.querySelector("#five-day-forecast")

//checks if a city name is input or not
var citySearch = function(event){
    event.preventDefault();
    var city = cityEl.value.trim();
    if(city){
        getCityData(city);
        city.value = "";
    }else{
        alert("Please enter a city.")
    }
    //console.log(city);
}
var getCityData = function(location) {
    //make a request to find the city the user is looking for
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=5c6e1425d7ae9ef9ee8b2d6a28ba77f3";
    
        fetch(apiUrl).then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    //longitude
                    let lon = data[0].lon;
                    //latitude
                    let lat = data[0].lat;
                    console.log(lon, lat);
                displayWeather(location, lon,lat);
                })
            } else {
                alert("City not found!");
            }
        })
}

var displayWeather = function(searchedLocation) {
    fiveDayForecast.textContent = searchedLocation;
    console.log(location, searchedLocation);

}

weatherEl.addEventListener("submit", citySearch);