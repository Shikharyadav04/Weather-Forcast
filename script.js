

let input = document.querySelector(".input input");
let sub = document.querySelector(".submit") ;



const checkWeather = async () => {
    
    let newUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=55e3280ce38c2d3989c030d08317ab31`
    let response = await fetch(newUrl);
    let locationData = await response.json() ;
    let latitude = await locationData[4].lat ;
    let longitude = await locationData[4].lon ;
    
    let newWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=55e3280ce38c2d3989c030d08317ab31`
    let weatherResponse = await fetch(newWeatherUrl) ;
    let weatherData = await weatherResponse.json() ;


    var temperature = weatherData.main.temp - 273.15
    let feels_like = weatherData.main.feels_like - 273.15
    let weatherCondition = weatherData.weather[0].main;
    let weatherIcon = weatherData.weather[0].icon ; 
    let windSpeed  = weatherData.wind.speed ;
    let humidity = weatherData.main.humidity ;
    
   document.querySelector(".actualTemp").innerHTML = `${(temperature).toFixed(1)}&deg C` ; 
   document.querySelector(".feelslikeTemp").innerHTML =  `Feels Like : ${(feels_like).toFixed(1)}&deg C`
   document.querySelector(".city-name").innerHTML = input.value.toUpperCase() ;
   document.querySelector(".humidity").innerHTML = `${humidity}%`
   document.querySelector(".windspeed").innerHTML = `${windSpeed}km/hr`
   document.querySelector(".weather-conditon").innerHTML = weatherCondition ;

   let newImageUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`

   let image = document.querySelector(".cloud") ;
    image.src = newImageUrl ;
    
   



}










sub.addEventListener("click",() => {
    
    checkWeather() ;
    
}) ;
