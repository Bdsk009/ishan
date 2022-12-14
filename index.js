const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '60ca2b4c0amsh7f510d022c8b202p13dca3jsn3c43a91becfa',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const GetWeather = (city) => {
    cityname.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp

            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    GetWeather(city.value)
})
GetWeather("Biratnagar")










fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        londontemp.innerHTML = response.temp
        londonfeelslike.innerHTML = response.feels_like
        londonhumidity.innerHTML = response.humidity
        londonmintemp.innerHTML = response.min_temp
        londonmaxtemp.innerHTML = response.max_temp
        londonwindspeed.innerHTML = response.wind_speed
        londonwinddegree.innerHTML = response.wind_degrees
        londonsunrise.innerHTML = response.sunrise
        londonsunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

