let weather = {
    "apiKey": "4ee540491ce6d9ece7b364f735f8d0fc",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/geo/1.0/direct?q="
             + city
             + "&appid="
             + this.apiKey
             )
        
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }

};


