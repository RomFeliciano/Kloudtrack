 function fetchForecastReport(apikey, locationkey) {

    var locationkey = locationkey;
    var apikey = apikey;
    var APIurl= "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"+locationkey+"?apikey="+apikey+"&language=en-us&details=true&metric=true" 
 
    fetch(APIurl, {
         method: 'GET',
         mode:'cors',
        Origin: "http://dataservice.accuweather.com",
        "Access-Control-Allow-Origin": "*",
        "Content-type" : "application/x-www-form-urlencoded"
     }).then(response =>{
        
            return response.json()

     }).then(data => {

            console.log("fetched from api");
            setDataToCards(data);
            localStorage.setItem('forecastString',JSON.stringify(data));
            console.log(data);
            
         
             return data

     }).catch(error => {

             console.log(error);
        
             return error

             
     })
     
     
    
}

//fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');

function setDataToCards(data) {
    var data = data;
 

    // get elements
    var hourlyTemperature = document.getElementsByClassName('hourlyTemperature');
    var hourlyRainText = document.getElementsByClassName('hourlyRainText');
    var hourlyWindText = document.getElementsByClassName('hourlyWindText');
    var hourlyHumidityText = document.getElementsByClassName('hourlyHumidityText');
    var hourlyTime = document.getElementsByClassName('hourlyTime');
   

    var cardNumber = 2;
    
    for (var i = 0; i < 4; i++){

       

        // for date
        var forecastdate = new Date(data[i].DateTime);
        var forecasttime = forecastdate.getHours();
        
        if (forecasttime >= 12) {
            var timeperiod = "PM";
        } else {
            var timeperiod = "AM";
        }

        forecasttime = forecastdate.getHours() % 12;

        if (forecasttime === 0) {
            forecasttime = 12;
        }

        forecasttime = forecasttime + "" + timeperiod;

        console.log(i + ": " + data[i].Temperature.Value);

        hourlyTemperature[cardNumber].innerText = data[i].Temperature.Value;
        hourlyRainText[cardNumber].innerText = data[i].Rain.Value;
        hourlyWindText[cardNumber].innerText = data[i].Wind.Speed.Value;
        hourlyHumidityText[cardNumber].innerText = data[i].RainProbability;
        hourlyTime[cardNumber].innerText = forecasttime;

         cardNumber++;
       
        
        
        

        
        


    }
}


function checkLocalStorage() {
    var currentdate = new Date(); 
    var currenttime = currentdate.getHours();
    var currentday = currentdate.getDay;
    console.log(currenttime);


    if (localStorage.getItem('forecastString') === null || localStorage.getItem('forecastString') === "") {

        fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');
        

    } else if (localStorage.getItem('forecastString') != null) {

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: 'numeric' };
        
        

        forecastString = localStorage.getItem('forecastString');
        forecastString = JSON.parse(forecastString);


        forecastFirstTime = new Date(forecastString[0].DateTime);
        //forecastFirstTime = forecastFirstTime.getHours();
        forecastFirstTime = forecastFirstTime.getMonth() + "/" +forecastFirstTime.getDay() +"/" + forecastFirstTime.getFullYear()  +":" + forecastFirstTime.getHours();
        forecastFirstTime = forecastFirstTime.toLocaleString("en-us",options);
        console.log("forecastFirstTime: " + forecastFirstTime);

        forecastLastTime = new Date(forecastString[11].DateTime);
        //forecastLastTime = forecastLastTime.getHours();
        forecastLastTime =  forecastLastTime.getMonth() + "/" +forecastLastTime.getDay() +"/" + forecastLastTime.getFullYear()  +":" +forecastLastTime.getHours();
        forecastLastTime = forecastLastTime.toLocaleString("en-us",options);

        console.log("forecastLastTime: " + forecastLastTime);

        forecastLastDate = new Date(forecastString[11].DateTime);
        forecastLastDay = forecastLastDate.getDay();
        
        console.log("getting from local json");
        console.log(forecastString);
        setDataToCards(forecastString);

        //fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');

        /*
        if (Number(currenttime) >= Number(forecastLastTime)) {
            console.log("currenttime >= forecastLastTime");
            fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');

        } else if (Number(currenttime) === Number(forecastFirstTime)) {
            console.log("using local stored json");
            dothis(forecastString);
            
        } else if ((Number(currenttime) +1) < Number(forecastFirstTime)) {

            console.log("currenttime < forecastFirstTime");
            fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');

            
        } else if (Number(currenttime) === 24) { 
            
            console.log("dawn of a new day");
            fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');

        }  else if (Number(forecastLastTime) === 0 || Number(currenttime) === forecastLastTime) { 
            

            if(Number(forecastLastDay) != Number(currentday)){}
            console.log("dawn of a new day");
            fetchForecastReport('UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ', '3406456');

        } else {

            console.log("using local stored json");
            dothis(forecastString);
            
        }
        */
        
        
        



        

        
    }
   
}



function checkTime() {

    
    var currentdate = new Date(); 
    var currenttime = currentdate.getHours();
    console.log("time check: " + currenttime);


    //var currenttime = 12;

    if (localStorage.getItem('kloudtrackLastReadTime') === null || localStorage.getItem('kloudtrackLastReadTime') === "") {

            localStorage.setItem('kloudtrackLastReadTime', currenttime);
            checkLocalStorage();


    } else {
        
        var lastReadTime = localStorage.getItem('kloudtrackLastReadTime');

        if (Number(currenttime) > Number(lastReadTime)) {

            localStorage.setItem('kloudtrackLastReadTime', currenttime);
            checkLocalStorage();

        } else {
            checkLocalStorage();
            
        }

    }

    
}


// checks if time has changed every second
//setInterval(checkTime, 1000);
checkLocalStorage();