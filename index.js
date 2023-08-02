getdetails=async ()=>{
    const data=await fetch('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22');
    const get= await data.json();
    const take=document.getElementById('take').value;
    const div=document.getElementById('result');
    if(take==1){
        if(div.lastChild)
            div.removeChild(div.lastChild);
        div.append(`Weather: ${get.list[0].weather[0].description}`);
    }else if(take==2){
        if(div.lastChild)
            div.removeChild(div.lastChild);
        div.append(`Wind Spedd: ${get.list[0].wind.speed}`);
    }else{
        if(div.lastChild)
            div.removeChild(div.lastChild);
        div.append(`Get Pressure: ${get.list[0].main.pressure}`);
    }
}