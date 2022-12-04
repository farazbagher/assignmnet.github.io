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
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const {icon, description } = data.weather;
        const {temp, humidity, pressure, temp_min, temp_max, feels_like} = data.main;
        const {speed} = data.wind;
        

    }

};


