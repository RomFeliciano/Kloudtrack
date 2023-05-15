//global variables
const locationkey = "3406456";
const APIKey = "osVssGlJUK7gpepKrjUjI8VZO95qqqce";


// getting location and setting its location key to api call for weather forecasting
function fetchLocation(){
    MyLocation = document.getElementById("MyLocation").value;



    var apikey = "UzqdktCunQjzEF1WCdMVd9NcfotoVYIQ";
    var APIurl= "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+apikey+"&q=" + MyLocation + "&language=en-us&details=false&offset=25&alias=NoMatch";
 
     fetch(APIurl, {
         method: 'GET',
         mode:'cors',
        Origin: "http://dataservice.accuweather.com",
        "Access-Control-Allow-Origin": "*",
        "Content-type" : "application/x-www-form-urlencoded"
     }).then(response =>{
        
            
            return response.json()

     }).then(data =>{

             console.log(data)
             
             // getting result's api key
             var key =  data[0]["Key"];
             console.log(key)

             // api call for api key 
             fetchForecastReport(apikey,key);
            
             
     }).catch(error => {

             console.log(error);
             
     })



}


 function fetchDailyForecst(apikey, locationkey){

    var locationkey = locationkey;
    var apikey = apikey;
    var APIurl= "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+locationkey+"?apikey="+apikey+"&language=en-us&details=true&metric=true" 
 
    fetch(APIurl, {
         method: 'GET',
         mode:'cors',
        Origin: "http://dataservice.accuweather.com",
        "Access-Control-Allow-Origin": "*",
        "Content-type" : "application/x-www-form-urlencoded"
     }).then(response =>{
        
            return response.json()

     }).then(data => {

            console.log("fetched from api")
        
            data = JSON.stringify(data)
            localStorage.setItem('kloudtrackDailyForecastString', data)
            data = JSON.parse(data)

            
            console.log("THIS DATA")
            console.log(data)
            setDailyToCards(data)
          

            return data

     }).catch(error => {

             console.log(error)
        
            return error

             
     })
     
     
    
}

//fetchDailyForecst("osVssGlJUK7gpepKrjUjI8VZO95qqqce","3406456");


function setDailyToCards(data) {
    
    var data = data;
    console.log("data from function");
    console.log(data);
    var cardDayText = document.getElementsByClassName('cardDayText');
    var cardDayTemperatureText = document.getElementsByClassName('cardDayTemperatureText');
    var cardNightTemperatureText = document.getElementsByClassName('cardNightTemperatureText');
    var cardDayRainText = document.getElementsByClassName('cardDayRainText');

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    



    for (var i = 0; i < 5; i++){

        var day = new Date(data.DailyForecasts[i].Date);
        day = weekday[day.getDay()];
        
       
        console.log(data.DailyForecasts[i].Temperature.Maximum.Value);

        cardDayTemperatureText[i].innerText = data.DailyForecasts[i].Temperature.Maximum.Value;
        cardNightTemperatureText[i].innerText = data.DailyForecasts[i].Temperature.Minimum.Value;
        cardDayRainText[i].innerText = data.DailyForecasts[i].Day.RainProbability;

        


        /*
        cardDayText[i].innerText = day;
        cardDayTemperatureText[i].innerText = data[i].Temperature.Maximum;
        cardNightTemperatureText[i].innerText = data[i].Temperature.Minimum;
        cardDayRainText[i].innerText = data[i].Day.RainProbability;

        */

    }

}


function checkDailyLocalStorage() {
    
    if (localStorage.getItem("kloudtrackDailyForecastString") === null || localStorage.getItem("kloudtrackDailyForecastString") === "") {
        console.log("fetching daily forecast from API...");
        fetchDailyForecst("osVssGlJUK7gpepKrjUjI8VZO95qqqce", "3406456");
    } else {

        console.log("fetching daily forecast from localstorage...");
        var data = localStorage.getItem("kloudtrackDailyForecastString");
        data = JSON.parse(data);
        console.log(data);
  
        setDailyToCards(data);

    }
}


checkDailyLocalStorage();

