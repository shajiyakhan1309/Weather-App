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
    time.innerText = "Date & Time : "+ data.datetime;
    
}


const URL2 = "https://wttr.in/Kolkata?format=j1";
const getTemp = async()=>{
    let response2= await fetch(URL2);
    console.log(response2);
    let data2 = await response2.json();
    temp.innerText = "Temperature in Celsius : " + data2.current_condition[0].temp_C + "\u00B0C";
    fahn.innerText = "Temperature in Fahrenheit  : " + data2.current_condition[0].temp_F + "\u00B0F";
    console.log(temp.innerText);

    if(temp.innerText >= "Temperature in Celsius : 26\u00B0C"){
        box.style.backgroundImage="url('Sunnyday.jpg')";
        info.style.color = "black";
        wind.innerText = "Sunny";
    }

    else if(temp.innerText >= "Temperature in Celsius : 0\u00B0C" && temp.innerText <= "Temperature in Celsius : 26\u00B0C"){
        box.style.backgroundImage="url('winterday.jpg')";
        info.style.color = "black";
        wind.innerText = "Chilly";
    }
    
    else{
        box.style.backgroundImage="url('Rainyday.jpg')";
        info.style.color = "white";
        wind.innerText = "Rainy";
    }
}


let currSeason = "Rainyday.jpg";
console.log(currSeason);
getTime();
getTemp();

console.log(currSeason);




