var locationElement = document.getElementById("location");
var dateElement = document.getElementById("date");
var tempElement = document.getElementById("temperature");
var humidityElement = document.getElementById("humidity")
var windElement = document.getElementById("wind-speed");
var UVElement = document.getElementById("UV-index");


window.onload = function () {
    //search bar results 
    $("#citySearch").on("click", function (e) {
        e.preventDefault()
        var searchInput = $("#searchBar").val();

        //API key information for 
        link = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&units=metric&apikey=2f64443f6a7392d35c85fe2d5fac7987";
        var request = new XMLHttpRequest();
        request.open('GET', link, true);
        request.onload = function () {
            var obj = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                console.log(obj)
                var countryOrigin = obj.sys.country;
                var cityName = obj.name;
                locationElement.innerHTML = `${cityName}, ${countryOrigin}`;
                var temp = obj.main.temp;
                var humidity = obj.main.humidity;
                var wind = obj.wind.speed;
                tempElement.innerHTML = `Temparature: ${temp}`;
                humidityElement.innerHTML = `Humidity: ${humidity}`;
                windElement.innerHTML = `Wind Speed: ${wind}`;
                var key = "2f64443f6a7392d35c85fe2d5fac7987"
                var latt = obj.coord.lat;
                console.log(latt)
                var lonn = obj.coord.lon;
                console.log(lonn)
                var uvIndex = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latt + "&lon=" + lonn + "&appid=" + key
                
                console.log(uvIndex)
                var uvContent = obj.value;
                console.log(uvContent)
            }
            else {
                console.log("The city doesn't exist!");
            }
        }

        request.send();
    })

    // Card 1
    var dateCard1 = document.getElementById("date1");
    var weatherIcon1 = document.getElementById("weatherIcon1");
    var temparatureCard1 = document.getElementById("temparatureCard1");
    var humidityCard1 = document.getElementById("humidityCard1");
    // Card 2
    var dateCard2 = document.getElementById("date2");
    var weatherIcon2 = document.getElementById("weatherIcon2");
    var temparatureCard2 = document.getElementById("temparatureCard2");
    var humidityCard2 = document.getElementById("humidityCard2");
    // Card 3
    var dateCard3 = document.getElementById("date3");
    var weatherIcon3 = document.getElementById("weatherIcon3");
    var temparatureCard3 = document.getElementById("temparatureCard3");
    var humidityCard3 = document.getElementById("humidityCard3");
    // Card 4
    var dateCard4 = document.getElementById("date4");
    var weatherIcon4 = document.getElementById("weatherIcon4");
    var temparatureCard4 = document.getElementById("temparatureCard4");
    var humidityCard4 = document.getElementById("humidityCard4");
    // Card 5
    var dateCard5 = document.getElementById("date5");
    var weatherIcon5 = document.getElementById("weatherIcon5");
    var temparatureCard5 = document.getElementById("temparatureCard5");
    var humidityCard5 = document.getElementById("humidityCard5");

    //search bar results 
    $("#citySearch").on("click", function (e) {
        e.preventDefault()
        var searchInput = $("#searchBar").val();

        //API key information for 5 DAY FORECAST
        link = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=2f64443f6a7392d35c85fe2d5fac7987";
        var request = new XMLHttpRequest();
        request.open('GET', link, true);
        request.onload = function () {
            var forecast = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                console.log(forecast)
                // Card 1
                // date format
                var date1 = forecast.list[0].dt_txt;
                var dateFormat1 = date1.slice(0, -9);
                dateCard1.innerHTML = `${dateFormat1}`;
                // weather image 
                var image1 = forecast.list[0].weather[0].icon;
                weatherIcon1.innerHTML = "<img src=" + " http://openweathermap.org/img/wn/" + image1 + "@2x.png" + " >";
                // temparature format
                var temp1 = forecast.list[0].main.temp;
                var tempString1 = temp1.toString();
                var tempConversion1 = (((tempString1 - 273.15) * 1.8) + 32);
                var tempSlice1 = tempConversion1.toString().slice(0, -12);
                temparatureCard1.innerHTML = `Temp: ${tempSlice1}`;
                // humidity format
                var humidity1 = forecast.list[0].main.humidity;
                var humiditySpring1 = humidity1.toString();
                humidityCard1.innerHTML = `Humidity: ${humiditySpring1}`;

                // Card 2
                // date format
                var date2 = forecast.list[8].dt_txt;
                var dateFormat2 = date2.slice(0, -9);
                dateCard2.innerHTML = `${dateFormat2}`;
                // weather image 
                var image2 = forecast.list[8].weather[0].icon;
                weatherIcon2.innerHTML = "<img src=" + " http://openweathermap.org/img/wn/" + image2 + "@2x.png" + " >";
                // temparature format
                var temp2 = forecast.list[8].main.temp;
                var tempString2 = temp2.toString();
                var tempConversion2 = (((tempString2 - 273.15) * 1.8) + 32);
                var tempSlice2 = tempConversion2.toString().slice(0, -12);
                temparatureCard2.innerHTML = `Temp: ${tempSlice2}`;
                // humidity format
                var humidity2 = forecast.list[8].main.humidity;
                var humiditySpring2 = humidity2.toString();
                humidityCard2.innerHTML = `Humidity: ${humiditySpring2}`;

                // Card 3
                // date format
                var date3 = forecast.list[16].dt_txt;
                var dateFormat3 = date3.slice(0, -9);
                dateCard3.innerHTML = `${dateFormat3}`;
                // weather image 
                var image3 = forecast.list[16].weather[0].icon;
                weatherIcon3.innerHTML = "<img src=" + " http://openweathermap.org/img/wn/" + image3 + "@2x.png" + " >";
                // temparature format
                var temp3 = forecast.list[16].main.temp;
                var tempString3 = temp3.toString();
                var tempConversion3 = (((tempString3 - 273.15) * 1.8) + 32);
                var tempSlice3 = tempConversion3.toString().slice(0, -12);
                temparatureCard3.innerHTML = `Temp: ${tempSlice3}`;
                // humidity format
                var humidity3 = forecast.list[16].main.humidity;
                var humiditySpring3 = humidity3.toString();
                humidityCard3.innerHTML = `Humidity: ${humiditySpring3}`;

                // Card 4
                // date format
                var date4 = forecast.list[24].dt_txt;
                var dateFormat4 = date4.slice(0, -9);
                dateCard4.innerHTML = `${dateFormat4}`;
                // weather image 
                var image4 = forecast.list[24].weather[0].icon;
                weatherIcon4.innerHTML = "<img src=" + " http://openweathermap.org/img/wn/" + image4 + "@2x.png" + " >";
                // temparature format
                var temp4 = forecast.list[24].main.temp;
                var tempString4 = temp4.toString();
                var tempConversion4 = (((tempString4 - 273.15) * 1.8) + 32);
                var tempSlice4 = tempConversion4.toString().slice(0, -12);
                temparatureCard4.innerHTML = `Temp: ${tempSlice4}`;
                // humidity format
                var humidity4 = forecast.list[24].main.humidity;
                var humiditySpring4 = humidity4.toString();
                humidityCard4.innerHTML = `Humidity: ${humiditySpring4}`;

                // Card 5
                // date format
                var date5 = forecast.list[32].dt_txt;
                var dateFormat5 = date5.slice(0, -9);
                dateCard5.innerHTML = `${dateFormat5}`;
                // weather image 
                var image5 = forecast.list[32].weather[0].icon;
                weatherIcon5.innerHTML = "<img src=" + " http://openweathermap.org/img/wn/" + image5 + "@2x.png" + " >";
                // temparature format
                var temp5 = forecast.list[32].main.temp;
                var tempString5 = temp5.toString();
                var tempConversion5 = (((tempString5 - 273.15) * 1.8) + 32);
                var tempSlice5 = tempConversion5.toString().slice(0, -12);
                temparatureCard5.innerHTML = `Temp: ${tempSlice5}`;
                // humidity format
                var humidity5 = forecast.list[32].main.humidity;
                var humiditySpring5 = humidity5.toString();
                humidityCard5.innerHTML = `Humidity: ${humiditySpring5}`;
            }
        }

        request.send();
    })

}

$("#table-row").on('click', 'tr', function () {
    //get row contents into an array
    var rowData = $(this).children("td").map(function () {
        return $(this).text();
    }).get();
});

console.log(rowData)