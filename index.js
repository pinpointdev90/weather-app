const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const year = today.getFullYear(); var month = today.getMonth() + 1;
const day = today.getDate();
const dayName = week[today.getDay()];

const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/s',
    days: [
        { day: 'Sun', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
        { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny' },
        { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
        { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
        { day: 'Thu', temp: 18, windDirection: 'south-east', windSpeed: 25, type: 'sunny' },
        { day: 'Fri', temp: 22, windDirection: 'south-east', windSpeed: 20, type: 'sunny' },
        { day: 'Sat', temp: 7, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
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
        wind.getElementsByClassName('value')[0].innerHTML = `${day.windSpeed} km/h`;
        document.getElementById('weather-desc').innerHTML = day.type;
        document.getElementById('weather-temp').innerHTML = `${day.temp}°C`;
        document.getElementById('date-dayname').innerHTML = dayName;
        document.getElementById('date-day').innerHTML = `${year}-${month}-${today.getDate()}`;
    }
    data.innerHTML = `<i class="day-icon" data-feather="cloud"></i><span class="day-name">${day.day}</span><span class="day-temp">${day.temp}°C</span>`;
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
            wind.getElementsByClassName('value')[0].innerHTML = `${day.windSpeed} km/h`;
            document.getElementById('weather-desc').innerHTML = day.type;
            document.getElementById('weather-temp').innerHTML = `${day.temp}°C`;
            console.log(dayName, today.getDay());
            for(let name of week) {
                if ( name.includes(selectedDay) ) {
                    document.getElementById('date-dayname').innerHTML = name;
                }
            }
            document.getElementById('date-day').innerHTML = `${year}-${month}-${today.getDate()}`;
        } else {
            data.classList.remove('active');
        }
        data.innerHTML = `<i class="day-icon" data-feather="cloud"></i><span class="day-name">${day.day}</span><span class="day-temp">${day.temp}°C</span>`;
    }
}