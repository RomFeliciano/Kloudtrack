 function fetchHourlyForecasts(apikey, locationkey) {

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
            setDataToCardsFromAPI(data);
            localStorage.setItem('forecastString',JSON.stringify(data));
            console.log(data);
            
            return data

     }).catch(error => {

             console.log(error)
        
             return error

             
     })
     
     
    
}



function setDataToCards(data) {
    console.log("setDataToCards()");

    var data = data;
    var currentTime = new Date().getHours();
    console.log("setdatatocards time " + currentTime);
    
    let startingPoint = "";

 

    // get elements
    var hourlyTemperature = document.getElementsByClassName('hourlyTemperature');
    var hourlyRainText = document.getElementsByClassName('hourlyRainText');
    var hourlyWindText = document.getElementsByClassName('hourlyWindText');
    var hourlyHumidityText = document.getElementsByClassName('hourlyHumidityText');
    var hourlyTime = document.getElementsByClassName('hourlyTime');
    var hourlyiconimg = document.getElementsByClassName('hourly-icon-img');
   


    
    for (var j = 0; j <data.length; j++){

        var time = new Date(data[j].DateTime).getHours();
        
  

        console.log("TIME: " + j + " - "+time);

        if (Number(time) === Number(currentTime)) {
            startingPoint = j + 1;
           
           
            
        } else {
            //startingPoint = "";
  
        }

        
    }

    console.log("starting point: " + startingPoint);

    if (startingPoint === "") {
        setDataToCardsFromAPI(data);
        return;
    }

    //console.log("starting point: " + startingPoint);
    
    console.log("current time: "+currentTime);
    
    

    var howmanyleft = data.length - startingPoint;
    console.log("Starting point: "+ startingPoint);
    console.log("how many left: " + howmanyleft);

    if (howmanyleft < 4) {

        fetchHourlyForecasts('osVssGlJUK7gpepKrjUjI8VZO95qqqce', '3406456');
        return 0;
    }


    var cardNumber = 2;
    
    for (var i = 0; i < 4; i++){

       

        // for date
        var forecastdate = new Date(data[startingPoint].DateTime);
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

        //console.log(i + ": " + data[i].Temperature.Value);

        hourlyTemperature[cardNumber].innerText = data[startingPoint].Temperature.Value;
        hourlyRainText[cardNumber].innerText = data[startingPoint].Rain.Value;
        hourlyWindText[cardNumber].innerText = data[startingPoint].Wind.Speed.Value;
        hourlyHumidityText[cardNumber].innerText = data[startingPoint].RainProbability;
        hourlyTime[cardNumber].innerText = forecasttime;
        hourlyiconimg[cardNumber]


        cardNumber++;
        startingPoint++;

       

        
        


    }
}



function startingPointfount(startingPoint) {
    var startingPoint = startingPoint;

    
    
}



function setDataToCardsFromAPI(data) {
    var data = data;
    
 

    // get elements
    var hourlyTemperature = document.getElementsByClassName('hourlyTemperature');
    var hourlyRainText = document.getElementsByClassName('hourlyRainText');
    var hourlyWindText = document.getElementsByClassName('hourlyWindText');
    var hourlyHumidityText = document.getElementsByClassName('hourlyHumidityText');
    var hourlyTime = document.getElementsByClassName('hourlyTime');
    var hourlyiconimg = document.getElementsByClassName('hourly-icon-img');
   




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

       // console.log(i + ": " + data[i].Temperature.Value);

        hourlyTemperature[cardNumber].innerText = data[i].Temperature.Value;
        hourlyRainText[cardNumber].innerText = data[i].Rain.Value;
        hourlyWindText[cardNumber].innerText = data[i].Wind.Speed.Value;
        hourlyHumidityText[cardNumber].innerText = data[i].RainProbability;
        hourlyTime[cardNumber].innerText = forecasttime;
        hourlyiconimg[cardNumber]


        cardNumber++;
      

       

        
        


    }
}


function checkLocalStorage() {
    var currentdate = new Date(); 
    var currenttime = currentdate.getHours();


    console.log(currenttime);


    if (localStorage.getItem('forecastString') === null || localStorage.getItem('forecastString') === "") {

        fetchHourlyForecasts('osVssGlJUK7gpepKrjUjI8VZO95qqqce', '3406456');
        

    } else if (localStorage.getItem('forecastString') != null) {

        /*

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
        */
        
        
        forecastString = localStorage.getItem('forecastString');
        forecastString = JSON.parse(forecastString);
        console.log("getting from local json");
        console.log(forecastString);
        setDataToCards(forecastString);

  
        
        



        

        
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



function checkDate() {

    
    var currentdate = new Date(); 
  
    console.log("Day check: " + currentdate);


    //var currenttime = 12;

    if (localStorage.getItem('kloudtrackLastReadDate') === null || localStorage.getItem('kloudtrackLastReadDate') === "") {

            localStorage.setItem('kloudtrackLastReadDate', currentdate);
            fetchHourlyForecasts('osVssGlJUK7gpepKrjUjI8VZO95qqqce', '3406456');


    } else {
        
        var lastReadDate = localStorage.getItem('kloudtrackLastReadDate');

        if (currentdate != lastReadDate) {

            localStorage.setItem('kloudtrackLastReadDate', currentdate);
            fetchHourlyForecasts('osVssGlJUK7gpepKrjUjI8VZO95qqqce', '3406456');

        } else {
            checkLocalStorage();
            
        }

    }

    
}

checkDate();
checkTime();

