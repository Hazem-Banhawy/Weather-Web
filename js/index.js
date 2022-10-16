async function getWeather(country) 
{
    let apiRespnse=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=182264c2a673482f845120657221210&q=${country}&days=3&aqi=no&alerts=no`)
let finalWeather=await apiRespnse.json()
container=finalWeather
console.log(finalWeather)
display()
}
getWeather("cairo")

function display() {
    let cartona = ``;
cartona =`
<div class="col-md-4 first">
<div>
<p class="day"></p>
<p class="date"></p>
</div>
<p class="location">${container.location.name}</p>
<h2 class='text-white hz'>${container.current.temp_c}<sup>o</sup>C
<img class="w-25" src="${container.current.condition.icon}"
</h2>
<p class="custom">${container.current.condition.text}</p>
<span><img src="Img/icon-umberella.png" alt=""> 20%</span>
<span><img src="Img/icon-wind.png"alt=""> 18km/h</span>
<span><img src="Img/icon-compass.png" alt=""> East</span>
</div>
<div class="col-md-4 second text-center"">
<div>
<p class="day"></p>
<p class="date"></p>
</div>
<h2>
<img class="w-25" src="${container.forecast.forecastday[1].day.condition.icon}"
</h2>
<h2 class='text-white hs'>${container.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
<p class"lead">${container.forecast.forecastday[1].day.mintemp_c}</p>
<p class="custom">${container.forecast.forecastday[1].day.condition.text}</p>
</div>
<div class="col-md-4 third text-center"">
<div>
<p class="day"></p>
<p class="date"></p>
</div>
<h2>
<img class="w-25" src="${container.forecast.forecastday[2].day.condition.icon}"
</h2>
<h2 class='text-white hs'>${container.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
<p class"lead">${container.forecast.forecastday[2].day.mintemp_c}</p>
<p class="custom">${container.forecast.forecastday[2].day.condition.text}</p>
</div>


`
document.getElementById("rowData").innerHTML=cartona
}  

let search =document.querySelector('#search')
search.addEventListener("input", function () {
getWeather(search.value);
  });
  getWeather('Cairo');
  
