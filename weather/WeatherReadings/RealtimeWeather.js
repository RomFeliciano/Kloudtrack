function realtimeReadings() {
     
   
    var recordDate = recordDate;
    var query = "fetchkey=A197C";
    
    console.log(query);
   
    var cardNumber = cardNumber;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function() {
        if (this.readyState === 4 || this.status === 200){ 
           

      
            var dataArray = this.response;

            if (dataArray != "failed to fetch") {

                console.log("realtime Data");
                dataArray = JSON.parse(dataArray);
                console.log(dataArray);
                setRealtimeReadings(dataArray);


            } else {

            }


            


        }else{

        }      
    };

    
    xmlhttp.open("POST", "weather/WeatherReadings/fetch.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
    


     
     
    
}// end of function




function setRealtimeReadings(data) {
    var data = data;
   
    
    
   

 

    // get elements
    var currentTempText = document.getElementById('currentTempText');
    var currentHeatIndexText  = document.getElementById('currentHeatIndexText');
    var currentPrecipitationText  = document.getElementById('currentPrecipitationText');
    var currentWindSpeed  = document.getElementById('currentWindSpeed');
    var currentHumidity  = document.getElementById('currentHumidity');
    var currentPressureText  = document.getElementById('currentPressureText');
    var currentUvIndexText  = document.getElementById('currentUvIndexText');
    var currentIrradianceText  = document.getElementById('currentIrradianceText');
    var currentRealtimeText  = document.getElementById('currentRealtimeText');
   


    
    
    

        // for date
        var forecastdate = new Date(data[0]['record_dateTime']);
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
    

        currentTempText.innerText = data[0]['record_temperature'];
        currentHeatIndexText.innerText = data[0]['record_heatIndex'];
        currentPrecipitationText.innerText = data[0]['record_rainGauge'];
        currentWindSpeed.innerText = data[0]['record_windSpeed'];
        currentHumidity.innerText = data[0]['record_humidity'];
        currentPressureText.innerText = data[0]['record_airPressure'];
        currentUvIndexText.innerText = data[0]['record_uvIndex'];
        currentIrradianceText.innerText = data[0]['record_irradiance'];
        currentRealtimeText.innerText = forecasttime;
        //hourlyiconimg[i]


      

       

        
        


    
}


console.log("====realtime weather====");
realtimeReadings();








