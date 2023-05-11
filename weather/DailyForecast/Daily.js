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


 function fetchForecastReport(apikey, locationkey) {

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

             dothis(data)
             console.log(data)
             //createElements(5);
             //setData(data);

             return data

     }).catch(error => {

             console.log(error);
        
             return error

             
     })
     
     
    
}

function dothis(jsondata){
    var jsondata = jsondata;
    createElements(5);
    setData(jsondata);

}


//fetchForecastReport("bUEevmZxee8eGOMSpQ8xYE7KjjtrJ7FY", "3406456");


function createElements(number){

    var number = number;
    document.getElementById("outputForecasts").innerHTML="";
    var outputForecasts = document.getElementById("outputForecasts");

    for(var i = 0; i<number;i++){

        var forecastDiv = document.createElement("div");
        var forecastDateTime = document.createElement("div");
        var forecastIcon = document.createElement("div");
        var forecastResult = document.createElement("div");


        forecastDiv.setAttribute('class','forecastDiv'); 
        forecastDateTime.setAttribute('class','forecastDateTime'); 
        forecastIcon.setAttribute('class','forecastIcon'); 
        forecastResult.setAttribute('class','forecastResult'); 

        forecastDiv.appendChild(forecastIcon);
        forecastDiv.appendChild(forecastResult);
        forecastDiv.appendChild(forecastDateTime);

        outputForecasts.appendChild(forecastDiv);

        
    }
    

}

//createElements(5);

// sample json result of the API

var jsonresult = {
    "Headline": {
        "EffectiveDate": "2023-04-16T19:00:00+08:00",
        "EffectiveEpochDate": 1681642800,
        "Severity": 5,
        "Text": "Expect showery weather Sunday evening through Monday morning",
        "Category": "rain",
        "EndDate": "2023-04-17T13:00:00+08:00",
        "EndEpochDate": 1681707600,
        "MobileLink": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-04-16T07:00:00+08:00",
            "EpochDate": 1681599600,
            "Sun": {
                "Rise": "2023-04-16T05:44:00+08:00",
                "EpochRise": 1681595040,
                "Set": "2023-04-16T18:12:00+08:00",
                "EpochSet": 1681639920
            },
            "Moon": {
                "Rise": "2023-04-16T02:47:00+08:00",
                "EpochRise": 1681584420,
                "Set": "2023-04-16T14:38:00+08:00",
                "EpochSet": 1681627080,
                "Phase": "WaningCrescent",
                "Age": 25
            },
            "Temperature": {
                "Minimum": {
                    "Value": 23.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 33,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 26.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                },
                "Maximum": {
                    "Value": 40.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 26.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Pleasant"
                },
                "Maximum": {
                    "Value": 36.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                }
            },
            "HoursOfSun": 2.5,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 10,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 8,
                    "Category": "Very High",
                    "CategoryValue": 4
                }
            ],
            "Day": {
                "Icon": 16,
                "IconPhrase": "Mostly cloudy w/ t-storms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate",
                "ShortPhrase": "Clouds breaking for some sun",
                "LongPhrase": "Cloudy this morning, then clouds and sunshine this afternoon",
                "PrecipitationProbability": 43,
                "ThunderstormProbability": 13,
                "RainProbability": 43,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 11.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 209,
                        "Localized": "SSW",
                        "English": "SSW"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 20.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 119,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "TotalLiquid": {
                    "Value": 1.8,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 1.8,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 1,
                "HoursOfRain": 1,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 81,
                "Evapotranspiration": {
                    "Value": 3.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 3596.9,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 39,
                "IconPhrase": "Partly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light",
                "ShortPhrase": "A brief shower or two",
                "LongPhrase": "Partly cloudy with a brief shower or two",
                "PrecipitationProbability": 80,
                "ThunderstormProbability": 16,
                "RainProbability": 80,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 260,
                        "Localized": "W",
                        "English": "W"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 18.5,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 257,
                        "Localized": "WSW",
                        "English": "WSW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0.9,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0.9,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 1.5,
                "HoursOfRain": 1.5,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 59,
                "Evapotranspiration": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 25,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2023-04-17T07:00:00+08:00",
            "EpochDate": 1681686000,
            "Sun": {
                "Rise": "2023-04-17T05:43:00+08:00",
                "EpochRise": 1681681380,
                "Set": "2023-04-17T18:12:00+08:00",
                "EpochSet": 1681726320
            },
            "Moon": {
                "Rise": "2023-04-17T03:32:00+08:00",
                "EpochRise": 1681673520,
                "Set": "2023-04-17T15:36:00+08:00",
                "EpochSet": 1681716960,
                "Phase": "WaningCrescent",
                "Age": 26
            },
            "Temperature": {
                "Minimum": {
                    "Value": 24.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 32.4,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 28.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 39.6,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 28.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 35.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                }
            },
            "HoursOfSun": 2,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 10,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 7,
                    "Category": "High",
                    "CategoryValue": 3
                }
            ],
            "Day": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate",
                "ShortPhrase": "A couple of morning showers",
                "LongPhrase": "A couple of morning showers; otherwise, mostly cloudy",
                "PrecipitationProbability": 81,
                "ThunderstormProbability": 23,
                "RainProbability": 81,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 11.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 142,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 22.2,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 109,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "TotalLiquid": {
                    "Value": 3.9,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 3.9,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 2,
                "HoursOfRain": 2,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 86,
                "Evapotranspiration": {
                    "Value": 3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 3216.5,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false,
                "ShortPhrase": "Partly cloudy",
                "LongPhrase": "Partly cloudy",
                "PrecipitationProbability": 25,
                "ThunderstormProbability": 6,
                "RainProbability": 25,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 184,
                        "Localized": "S",
                        "English": "S"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 16.7,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 106,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 66,
                "Evapotranspiration": {
                    "Value": 0.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 29.3,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2023-04-18T07:00:00+08:00",
            "EpochDate": 1681772400,
            "Sun": {
                "Rise": "2023-04-18T05:43:00+08:00",
                "EpochRise": 1681767780,
                "Set": "2023-04-18T18:12:00+08:00",
                "EpochSet": 1681812720
            },
            "Moon": {
                "Rise": "2023-04-18T04:14:00+08:00",
                "EpochRise": 1681762440,
                "Set": "2023-04-18T16:32:00+08:00",
                "EpochSet": 1681806720,
                "Phase": "WaningCrescent",
                "Age": 27
            },
            "Temperature": {
                "Minimum": {
                    "Value": 24.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 32.5,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 28.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 40.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 28.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 36.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                }
            },
            "HoursOfSun": 4.7,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 11,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 12,
                    "Category": "Extreme",
                    "CategoryValue": 5
                }
            ],
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate",
                "ShortPhrase": "A stray morning thunderstorm",
                "LongPhrase": "A stray morning thunderstorm; otherwise, some sun, then turning cloudy",
                "PrecipitationProbability": 45,
                "ThunderstormProbability": 27,
                "RainProbability": 45,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 13,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 110,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 24.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 104,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "TotalLiquid": {
                    "Value": 3.4,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 3.4,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 1,
                "HoursOfRain": 1,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 67,
                "Evapotranspiration": {
                    "Value": 4.1,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 4716,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false,
                "ShortPhrase": "Partly to mostly cloudy",
                "LongPhrase": "Partly to mostly cloudy",
                "PrecipitationProbability": 25,
                "ThunderstormProbability": 6,
                "RainProbability": 25,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 9.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 138,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 24.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 208,
                        "Localized": "SSW",
                        "English": "SSW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 75,
                "Evapotranspiration": {
                    "Value": 0.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 51.2,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2023-04-19T07:00:00+08:00",
            "EpochDate": 1681858800,
            "Sun": {
                "Rise": "2023-04-19T05:42:00+08:00",
                "EpochRise": 1681854120,
                "Set": "2023-04-19T18:12:00+08:00",
                "EpochSet": 1681899120
            },
            "Moon": {
                "Rise": "2023-04-19T04:55:00+08:00",
                "EpochRise": 1681851300,
                "Set": "2023-04-19T17:27:00+08:00",
                "EpochSet": 1681896420,
                "Phase": "WaningCrescent",
                "Age": 29
            },
            "Temperature": {
                "Minimum": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 33.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 28.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 41.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Dangerous Heat"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 28.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 36.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                }
            },
            "HoursOfSun": 8.5,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 11,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 12,
                    "Category": "Extreme",
                    "CategoryValue": 5
                }
            ],
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light",
                "ShortPhrase": "An a.m. shower; partly sunny",
                "LongPhrase": "A morning shower in places; otherwise, partly sunny",
                "PrecipitationProbability": 55,
                "ThunderstormProbability": 11,
                "RainProbability": 55,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 11.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 117,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 22.2,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 111,
                        "Localized": "ESE",
                        "English": "ESE"
                    }
                },
                "TotalLiquid": {
                    "Value": 0.7,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0.7,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0.5,
                "HoursOfRain": 0.5,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 31,
                "Evapotranspiration": {
                    "Value": 5.1,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 6421.9,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false,
                "ShortPhrase": "Mainly clear",
                "LongPhrase": "Mainly clear",
                "PrecipitationProbability": 7,
                "ThunderstormProbability": 0,
                "RainProbability": 7,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 186,
                        "Localized": "S",
                        "English": "S"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 14.8,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 239,
                        "Localized": "WSW",
                        "English": "WSW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 28,
                "Evapotranspiration": {
                    "Value": 0.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 55.5,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2023-04-20T07:00:00+08:00",
            "EpochDate": 1681945200,
            "Sun": {
                "Rise": "2023-04-20T05:41:00+08:00",
                "EpochRise": 1681940460,
                "Set": "2023-04-20T18:13:00+08:00",
                "EpochSet": 1681985580
            },
            "Moon": {
                "Rise": "2023-04-20T05:35:00+08:00",
                "EpochRise": 1681940100,
                "Set": "2023-04-20T18:22:00+08:00",
                "EpochSet": 1681986120,
                "Phase": "New",
                "Age": 0
            },
            "Temperature": {
                "Minimum": {
                    "Value": 25,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 33.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "RealFeelTemperature": {
                "Minimum": {
                    "Value": 29,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 42.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Dangerous Heat"
                }
            },
            "RealFeelTemperatureShade": {
                "Minimum": {
                    "Value": 29,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Maximum": {
                    "Value": 37.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                }
            },
            "HoursOfSun": 7.4,
            "DegreeDaySummary": {
                "Heating": {
                    "Value": 0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Cooling": {
                    "Value": 11,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "AirAndPollen": [
                {
                    "Name": "AirQuality",
                    "Value": 0,
                    "Category": "Good",
                    "CategoryValue": 1,
                    "Type": "Ozone"
                },
                {
                    "Name": "Grass",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Mold",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Ragweed",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "Tree",
                    "Value": 0,
                    "Category": "Low",
                    "CategoryValue": 1
                },
                {
                    "Name": "UVIndex",
                    "Value": 11,
                    "Category": "Extreme",
                    "CategoryValue": 5
                }
            ],
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate",
                "ShortPhrase": "A stray morning thunderstorm",
                "LongPhrase": "A morning thunderstorm in spots; otherwise, partial sunshine",
                "PrecipitationProbability": 41,
                "ThunderstormProbability": 25,
                "RainProbability": 41,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 11.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 136,
                        "Localized": "SE",
                        "English": "SE"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 24.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 225,
                        "Localized": "SW",
                        "English": "SW"
                    }
                },
                "TotalLiquid": {
                    "Value": 1.7,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 1.7,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 1,
                "HoursOfRain": 1,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 41,
                "Evapotranspiration": {
                    "Value": 4.6,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 5576.6,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false,
                "ShortPhrase": "Mainly clear",
                "LongPhrase": "Mainly clear",
                "PrecipitationProbability": 3,
                "ThunderstormProbability": 0,
                "RainProbability": 3,
                "SnowProbability": 0,
                "IceProbability": 0,
                "Wind": {
                    "Speed": {
                        "Value": 7.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 300,
                        "Localized": "WNW",
                        "English": "WNW"
                    }
                },
                "WindGust": {
                    "Speed": {
                        "Value": 18.5,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Direction": {
                        "Degrees": 243,
                        "Localized": "WSW",
                        "English": "WSW"
                    }
                },
                "TotalLiquid": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Rain": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Snow": {
                    "Value": 0,
                    "Unit": "cm",
                    "UnitType": 4
                },
                "Ice": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "HoursOfPrecipitation": 0,
                "HoursOfRain": 0,
                "HoursOfSnow": 0,
                "HoursOfIce": 0,
                "CloudCover": 28,
                "Evapotranspiration": {
                    "Value": 0.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "SolarIrradiance": {
                    "Value": 64,
                    "Unit": "W/m²",
                    "UnitType": 33
                }
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ph/balanga-city/1-265323_1_al/daily-weather-forecast/1-265323_1_al?day=5&unit=c&lang=en-us"
        }
    ]
};


//console.log(jsonresult["DailyForecasts"][0]);
//console.log(jsonresult);
//setData(jsonresult);

function setData(jsonobject){


    var jsonobject = jsonobject;
    var jsonobjectlength = jsonobject.length;
    var forecastDateTime = document.getElementsByClassName("forecastDateTime");
    var forecastIcon = document.getElementsByClassName("forecastIcon");
    var forecastResult = document.getElementsByClassName("forecastResult");
    var outputDiv = document.getElementById("outputDiv");

    var outputHeader = document.getElementById("outputHeader");

    for(var i = 0; i<5; i++){

        // for date
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var forecastdate = new Date(jsonresult["DailyForecasts"][i].Date);
        var forecastdate = forecastdate.toLocaleDateString("en-US", options); 

        // for icon 
        var iconNumber = jsonresult["DailyForecasts"][i].Day.Icon;
        if(iconNumber < 10){
            iconNumber = "0" + iconNumber
        }   

        var image = new Image();
        image.src = "http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/" +iconNumber +"-s.png";
        
        
        forecastDateTime[i].innerText = forecastdate;
        forecastIcon[i].appendChild(image);
        forecastResult[i].innerText = jsonresult["DailyForecasts"][i].Day.LongPhrase + "\n \n \n";

    }


    outputDiv.style.display="grid";


}