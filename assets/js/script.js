//5c6e1425d7ae9ef9ee8b2d6a28ba77f3 api key
let weather = document.querySelector("#city-form");
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

                //call the current weather
                var weatherApi = "https:api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5c6e1425d7ae9ef9ee8b2d6a28ba77f3";
                //console.log(weatherApi);
                var weatherType = data[0].weather;
                console.log(weatherType);
                var weatherEl =document.createElement("div");
                weatherEl.classList = "list-item flex-row justify-space-between align-center";
                var titleEl = document.createElement("span");
                //titleEl.textContent = weatherType;
                //append to container
                //weatherType.appendChild(titleEl);
                displayWeather(location);
                })
            } 
        })
}


var displayWeather = function(searchedLocation) {
    fiveDayForecast.textContent = searchedLocation;
    //console.log(location, searchedLocation);

}

weather.addEventListener("submit", citySearch);