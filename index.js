const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const year = today.getFullYear(); var month = today.getMonth() + 1;
const day = today.getDate();
const dayName = week[today.getDay()];

const weatherData = {
    tempUnit: '°C',
    windSpeedUnit: 'm/s',
    days: [
        { day: 'Sun', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy', feather: 'cloud' },
        { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny', feather: 'sun' },
        { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy', feather: 'cloud-rain' },
        { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy', feather: 'cloud' },
        { day: 'Thu', temp: 18, windDirection: 'south-east', windSpeed: 25, type: 'sunny', feather: 'sun' },
        { day: 'Fri', temp: 22, windDirection: 'south-east', windSpeed: 20, type: 'sunny', feather: 'sun' },
        { day: 'Sat', temp: 7, windDirection: 'south-east', windSpeed: 20, type: 'cloudy', feather: 'cloud' },
    ]
}

for (let day of weatherData.days) {
    let data = document.getElementById(day.day);
    if (dayName.includes(day.day)) {
        data.className = 'active';
        let precipitation = document.getElementById('precipitation');
        precipitation.getElementsByClassName('value')[0].innerHTML = day.windDirection;
        let humidity = document.getElementById('humidity');
        humidity.getElementsByClassName('value')[0].innerHTML = day.type;
        let wind = document.getElementById('wind');
        wind.getElementsByClassName('value')[0].innerHTML = `${day.windSpeed} ${weatherData.windSpeedUnit}`;
        document.getElementById('weather-desc').innerHTML = day.type;
        document.getElementById('weather-temp').innerHTML = `${day.temp}${weatherData.tempUnit}`;
        document.getElementById('date-dayname').innerHTML = dayName;
        document.getElementById('date-day').innerHTML = `${year}-${month}-${today.getDate()}`;
    }
    data.innerHTML = `<i class="day-icon" data-feather="${day.feather}"></i><span class="day-name">${day.day}</span><span class="day-temp">${day.temp}${weatherData.tempUnit}</span>`;
}

function selectDay(selectedDay) {
    for (let day of weatherData.days) {
        let data = document.getElementById(day.day);
        if (selectedDay === day.day) {
            data.className = 'active';
            let precipitation = document.getElementById('precipitation');
            precipitation.getElementsByClassName('value')[0].innerHTML = day.windDirection;
            let humidity = document.getElementById('humidity');
            humidity.getElementsByClassName('value')[0].innerHTML = day.type;
            let wind = document.getElementById('wind');
            wind.getElementsByClassName('value')[0].innerHTML = `${day.windSpeed} ${weatherData.windSpeedUnit}`;
            document.getElementById('weather-desc').innerHTML = day.type;
            document.getElementById('weather-temp').innerHTML = `${day.temp}${weatherData.tempUnit}`;
            document.getElementById('weather-icon').remove();
            var node = document.createElement("i");
            node.className = 'weather-icon';
            node.id = 'weather-icon';
            let feather = document.createRange().createContextualFragment(`<i class="weather-icon" id="weather-icon" data-feather="${day.feather}"></i>`);
            document.getElementById('weather-container').insertBefore(feather, document.getElementById('weather-container').firstChild);
            for(let name of week) {
                if ( name.includes(selectedDay) ) {
                    document.getElementById('date-dayname').innerHTML = name;
                }
            }
            document.getElementById('date-day').innerHTML = `${year}-${month}-${today.getDate()}`;
        } else {
            data.classList.remove('active');
        }
        data.innerHTML = `<i class="day-icon" data-feather="${day.feather}"></i><span class="day-name">${day.day}</span><span class="day-temp">${day.temp}${weatherData.tempUnit}</span>`;
        feather.replace();
    }
}