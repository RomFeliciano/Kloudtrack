function pastReadings(recordDate,recordTimeFrom,recordTimeTo, cardNumber) {
     
   
    var recordDate = recordDate;
    var query = "fetchkey=A197C&date=" + recordDate + "&timefrom=" + recordTimeFrom + "&timeto=" + recordTimeTo;
    
    console.log(query);
   
    var cardNumber = cardNumber;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

      
            var dataArray = this.response;
            //console.log("response: " + dataArray);


            if (dataArray != "failed to fetch") {

                console.log("past Data");
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setReadingsToCards(dataArray, cardNumber);

            } else {
                console.log("failed to fetch");
                fetchLastPastReadings();
            }


            


        }else{

        }      
    };

    
    xmlhttp.open("POST", "weather/WeatherReadings/fetchPastTwoHours.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    


     
     
    
}// end of function



function fetchLastPastReadings() {
     
   
    
    var query = "fetchkey=A197C";
   
    
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

      
            var dataArray = this.response;

            if (dataArray != "failed to fetch") {
                console.log("fetching latest records..");
                dataArray = JSON.parse(dataArray);
                console.log(dataArray); 
                setLastReadingsToCards(dataArray)
                
            } else {
                alert("Ooops.. Something went wrong. Please try again later");
            }





        }else{

        }      
    };

    
    xmlhttp.open("POST", "weather/WeatherReadings/fetch.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    


     
     
    
}// end of function



function setReadingsToCards(data,cardNumber) {
    var data = data;
    var cardNumber = cardNumber;
    
    
   

 

    // get elements
    var hourlyTemperature = document.getElementsByClassName('hourlyTemperature');
    var hourlyRainText = document.getElementsByClassName('hourlyRainText');
    var hourlyWindText = document.getElementsByClassName('hourlyWindText');
    var hourlyHumidityText = document.getElementsByClassName('hourlyHumidityText');
    var hourlyTime = document.getElementsByClassName('hourlyTime');
   // var hourlyiconimg = document.getElementsByClassName('hourly-icon-img');
   


    
    
    

        // for date
        var forecastdate = new Date(data[0]['record_dateTime']);
        var forecasttime = forecastdate.getHours();
        console.log("card number: " + cardNumber + "time: " + forecasttime);
        
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
        hourlyTemperature[cardNumber].innerText = data[0]['record_temperature'];
        hourlyRainText[cardNumber].innerText = data[0]["record_rainGauge"];
        hourlyWindText[cardNumber].innerText = data[0]["record_windSpeed"];
        hourlyHumidityText[cardNumber].innerText = data[0]["record_rainGauge"];
        hourlyTime[cardNumber].innerText = forecasttime;
        //hourlyiconimg[i]


      

       

        
        


    
}



function setLastReadingsToCards(data) {
    var data = data;
    var currentTime = new Date().getHours();
    
   

 

    // get elements
    var hourlyTemperature = document.getElementsByClassName('hourlyTemperature');
    var hourlyRainText = document.getElementsByClassName('hourlyRainText');
    var hourlyWindText = document.getElementsByClassName('hourlyWindText');
    var hourlyHumidityText = document.getElementsByClassName('hourlyHumidityText');
    var hourlyTime = document.getElementsByClassName('hourlyTime');
    var hourlyiconimg = document.getElementsByClassName('hourly-icon-img');
   


    
    
    for (var i = 0; i < 2; i++){

        // for date
        var forecastdate = new Date(data[i]['record_dateTime']);
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
        hourlyTemperature[i].innerText = data[i]['record_temperature'];
        hourlyRainText[i].innerText = data[i]["record_rainGauge"];
        hourlyWindText[i].innerText = data[i]["record_windSpeed"];
        hourlyHumidityText[i].innerText = data[i]["record_rainGauge"];
        hourlyTime[i].innerText = forecasttime;
        //hourlyiconimg[i]


      

       

        
        


    }
}


console.log("======= weather readings ========");
var currentdate = new Date(); 
var currentDay = currentdate.getDay();
var currentMonth = currentdate.getDate();

if (currentDay < 10) {
    currentDay = "0" + currentDay;
}

if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
}

var todate = currentdate.getFullYear() + "-" + currentDay + "-" + currentMonth;
var currentHour = currentdate.getHours();
var pastHour = currentdate.getHours() - 1;
var pastTwoHours = currentdate.getHours() - 2;




if (currentHour > 12) {

    currentHour = currentHour % 12;
}

if (pastHour > 12) {
    pastHour = pastHour % 12;
}

if (pastTwoHours > 12) {
    pastTwoHours = pastTwoHours % 12;

}


/*
pastHour = pastHour + ":00";
pastTwoHours = pastTwoHours + ":00";
currentHour = currentHour + ":00";
*/

console.log("pastTwoHours: " + pastTwoHours);
console.log("pastHour: " + pastHour);
console.log("currentHour: " + currentHour);



pastReadings(todate, pastTwoHours, pastHour,0);
pastReadings(todate, pastHour, currentHour, 1);
