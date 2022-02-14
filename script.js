async function getData(url = '',) {
    const response = await fetch(url);
        
       
    
    return response.json();
}

getData('https://api.openweathermap.org/data/2.5/weather?q=Durgapur&units=metric&appid=478722882c6e69b8d13f836cc9cb2543')
.then(data => {
    
    
    temprature.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity;
    loc.innerHTML = data.name;
    
});

setInterval(function(){
var today = new Date();

var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.getElementById("day").innerHTML = day;
}, 1000);


 