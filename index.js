const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const year = today.getFullYear(); var month = today.getMonth() + 1;
const day = today.getDate();
const dayName = week[today.getDay()];
document.getElementById('date-dayname').innerHTML = dayName;
document.getElementById('date-day').innerHTML = `${year}-${month}-${day}`;
document.getElementById('weather-desc').innerHTML = 'Sunny';
