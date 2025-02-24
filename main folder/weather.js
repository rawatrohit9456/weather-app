
const inputbox=document.querySelector(".inputbox")
const but=document.getElementById('searchBtn')
const wimage=document.querySelector(".sun")
const temp=document.querySelector(".w_temp")
const update=document.querySelector(".w1_temp")
const humid=document.querySelector(".hp")
const humdet=document.querySelector(".hh")
const windsp=document.querySelector(".windsp")
const winddet=document.querySelector(".winddet")



async function showWeather(city){
    const api_key="653b82a3d35ff797d11db47bb67edae4";

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

     const weatherData = await fetch(`${url}`).then(response =>response.json());
//      console.log(weatherData )
     temp.innerHTML =`${Math.round(weatherData.main.temp-273.15)}°C`;
     update.innerHTML=`${weatherData.weather[0].main}`
     humid.innerHTML=`${weatherData.main.humidity}%`
     windsp.innerHTML=`${weatherData.wind.speed}km/h`;

     switch(weatherData.weather[0].main){
     case `Haze`: 
            sun.src="haze.jpg";
            break;
     case `Clouds`: 
            sun.src="cloudy.png";
            break;

     case `Clear`: 
            sun.src="sun.jpg";
            break;

     case `Rain`: 
            sun.src="rain.jpg";
            break;
     
     
 }
}


   but.addEventListener('click',()=>{
    showWeather(inputbox.value);
} ) 




