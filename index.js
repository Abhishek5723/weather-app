console.assertlog('Hello jee babbar');
 const API_KEY="d1845658f92b31c64bd94f06f7188c9c" ;
async function showweather(){
    // let latitude=15.3333;
    // let longitude =74.0833;
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
    const data=  await response.json();
    console.log("weather data: ->" ,data);

    let newpara=document.createElement('p');
    newpara.textContent=data.
} 


