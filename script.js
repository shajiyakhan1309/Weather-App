const URL = "https://api.timezonedb.com/v2.1/get-time-zone";
const getTime = async()=>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    // let data = await response.json();
    // console.log(data.text);
}


let box = document.getElementById("main-box");
let info = document.getElementById("info");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");

let currSeason = "Rainyday.jpg";
console.log(currSeason);

// Sunny day
box.addEventListener("click",()=>{
    if(currSeason==="Rainyday.jpg"){
    currSeason =  "Sunnyday.jpg";
    box.style.backgroundImage="url('Sunnyday.jpg')";
    info.style.color = "black";
    temp.innerText = "25°C to 35°C (77°F to 95°F)";
    wind.innerText = "Sunny";
}

// Chilly day
else if(currSeason==="Sunnyday.jpg"){
    currSeason = "winterday.jpg";
    box.style.backgroundImage="url('winterday.jpg')";
    info.style.color = "black";
    temp.innerText = "10°C (50°F)";
    wind.innerText = "Chilly";
}

//Rainy day
else{
    currSeason = "Rainyday.jpg";
    box.style.backgroundImage="url('Rainyday.jpg')";
    info.style.color = "white";
    temp.innerText = "20°C to 30°C (68°F to 86°F)";
    wind.innerText = "Rainy";
}
console.log(currSeason);
});



