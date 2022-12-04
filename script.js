let weather = {
    "apiKey": "4ee540491ce6d9ece7b364f735f8d0fc",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&appid="
             + this.apiKey
             )
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const {pressure, temp_min, temp_max, feels_like} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innertext = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".temp").innertext = temp + "°C";
        document.querySelector(".description").innertext = description;
        document.querySelector(".humidity").innertext = 
        "humidity: " + humidity + "%";
        document.querySelector(".pressure").innertext = 
        "pressure: " + pressure + "Hg";
        document.querySelector(".temp_min").innertext = 
        "temp_min: " + temp_min + "°C";
        document.querySelector(".temp_max").innertext = 
        "temp_max: " + temp_max + "°C";
        document.querySelector(".feels_like").innertext = 
        "feels_like: " + feels_like + "°C";
          

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value); 

     
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enetr"){
        weather.search();
    }
});
    

