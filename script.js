let box = document.getElementById("main-box");
let info = document.getElementById("info");
let temp = document.querySelector(".temp");
let fahn = document.querySelector(".Fahren");
let wind = document.querySelector(".wind");
let time = document.querySelector(".time");

const URL = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";
const getTime = async()=>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    time.innerText = "Date & Time : "+data.datetime;
    
}

const URL2 = "https://wttr.in/Kolkata?format=j1";
const getTemp = async()=>{
    console.log("getting data.....");
    let response2= await fetch(URL2);
    console.log(response2);
    let data2 = await response2.json();
    temp.innerText = "Temperature in Celsius : " + data2.current_condition[0].temp_C + "\u00B0C";
    fahn.innerText = "Temperature in Fahrenheit  : " + data2.current_condition[0].temp_F + "\u00B0F";
}

let currSeason = "Rainyday.jpg";
console.log(currSeason);
getTime();
getTemp();

// Sunny day
box.addEventListener("click",()=>{
    if(currSeason==="Rainyday.jpg"){
    currSeason =  "Sunnyday.jpg";
    box.style.backgroundImage="url('Sunnyday.jpg')";
    info.style.color = "black";
    getTemp();
    wind.innerText = "Sunny";
    getTime();
}

// Chilly day
else if(currSeason==="Sunnyday.jpg"){
    currSeason = "winterday.jpg";
    box.style.backgroundImage="url('winterday.jpg')";
    info.style.color = "black";
    getTemp();
    wind.innerText = "Chilly";
    getTime();
}

//Rainy day
else{
    currSeason = "Rainyday.jpg";
    box.style.backgroundImage="url('Rainyday.jpg')";
    info.style.color = "white";
    getTemp();
    wind.innerText = "Rainy";
    getTime();
}
console.log(currSeason);
});





