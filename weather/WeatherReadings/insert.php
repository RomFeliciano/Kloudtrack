<?php


    require("../classes/dbHandler.php");

    $DBHandler_weather = new DBHandler_weather();
    

    $fetchKeyValue = "A197C";
    $key = "";
    $loc = "";
    $temperature = "0";
    $humidity = "0";
    $pressure = "0";
    $light = "0";
    $irradiance = "0";
    $uvIntensity = "";
    $windDirection = "0";
    $windSpeed = "0";
    $rainGuage = "0";
    $waterLevel = "0";
    $windDirectionValue = "0";
    $heatindexdata = "";
    $uvIndex = "";
    $heatIndexColor = "";
    

    // adding encryption parameters
    $cipher = "AES-128-ECB"; // cipher method to be used
    $option = 0; //
    $encryption_iv =""; //initialization vector for hashing
    $encryptionKey ="newkloudTECH2023"; // will be from the device

    
    
    $PostData = file_get_contents("php://input");
    $PostData = json_decode($PostData,true);
    
    print_r($PostData);

    

    

    if (isset($PostData['key'])){
    
            $key = $PostData['key'];
          
    }

    if (isset($PostData['loc'])){
    
            $loc = $PostData['loc'];
            
    }
    
    if (isset($PostData['temperature'])) {
    
            $temperature = $PostData['temperature'];
            
  
    } 
    
    if (isset($PostData['humidity'])) {
    
            $humidity = $PostData['humidity'];
            
    }
    
    if (isset($PostData['pressure'])) {
    
            $pressure = $PostData['pressure'];
           
    }
    
    if (isset($PostData['light'])) {
    
            $light = $PostData['light'];
           
    } 
    
    
    if (isset($PostData['irradiance'])) {
    
            $irradiance = $PostData['irradiance'];
          
    }

    if (isset($PostData['uvIntensity'])) {
    
            $uvIntensity = $PostData['uvIntensity'];
            $uvIntensity = (int)$uvIntensity;
            
            
            if($uvIntensity < 50){
                $uvIndex = 0;

            } else if($uvIntensity >= 50 && $uvIntensity < 227){
                $uvIndex = 1;

            } else if($uvIntensity >= 227 && $uvIntensity < 318){
                $uvIndex = 2;

            }else if($uvIntensity >= 318 && $uvIntensity < 408){
                $uvIndex = 3;

            }else if($uvIntensity >= 408 && $uvIntensity < 503){
                $uvIndex = 4;

            }else if($uvIntensity >= 503 && $uvIntensity < 606){
                $uvIndex = 5;

            }else if($uvIntensity >= 606 && $uvIntensity < 696){
                $uvIndex = 6;

            }else if($uvIntensity >= 696 && $uvIntensity < 795){
                $uvIndex = 7;

            }else if($uvIntensity >= 795 && $uvIntensity < 881){
                $uvIndex = 8;

            }else if($uvIntensity >= 881 && $uvIntensity < 976){
                $uvIndex = 9;

            }else if($uvIntensity >= 976 && $uvIntensity < 1079){
                $uvIndex = 10;

            }else if ($uvIntensity >= 1079 && $uvIntensity < 1170){
                $uvIndex = 11;

            }
            
            echo "\n uv index: ".$uvIndex."\n";
            
            
            
        
    }

    if (isset($PostData['windDirection'])) {
    
         
            
           $windDirectionValue =  $PostData['windDirection'];
           
         
           $windDirectionValue = (int)$windDirectionValue;
         

           if($windDirectionValue === 0){
                $windDirection = "North";
                
           } else if($windDirectionValue === 90){
                $windDirection = "East";

           }else if($windDirectionValue === 180){
                $windDirection = "South";

           }else if($windDirectionValue === 270){
                $windDirection = "West";

           }else if($windDirectionValue > 0 && $windDirectionValue < 90){
                $windDirection = "North East";

           }else if($windDirectionValue > 90 && $windDirectionValue < 180){
                $windDirection = "South East";

           }else if($windDirectionValue > 180 && $windDirectionValue < 270){
                $windDirection = "South West";

           }else if($windDirectionValue > 270 && $windDirectionValue < 360){
                $windDirection = "North West";

           } else {
                $windDirection = "Invalid Value";
           }
           
    }

    if (isset($PostData['windSpeed'])) {
    
            $windSpeed = $PostData['windSpeed'];
            
    }

    if (isset($PostData['rainGauge'])) {
    
            $rainGuage = $PostData['rainGauge'];
            
    }

    if (isset($PostData['waterLevel'])) {
    
            $waterLevel = $PostData['waterLevel'];
           
            
    }
    
    
    if(isset($PostData['heatindexdata'])){
          $heatindexdata = $PostData['heatindexdata'];
          echo "heatindex: ".$heatindexdata."\n";
          
          
          $heatindexdata = (int)$heatindexdata;
          
          if($heatindexdata >=18 && $heatindexdata <= 26){
                $heatIndexColor = "cyan";
          } else if($heatindexdata >=27 && $heatindexdata <= 31){
                $heatIndexColor = "green";
          } else if($heatindexdata >=32 && $heatindexdata <= 51){
                $heatIndexColor = "yellow";
          } else if($heatindexdata >=52 && $heatindexdata <= 66){
                $heatIndexColor = "red";
          }
          
          
          echo "\n heat index color: ".$heatIndexColor."\n";

    }
    
    
    
    
    if ($key === $fetchKeyValue ) {
    
      date_default_timezone_set("Asia/Manila");
     
      
      $currentdatetime = date("Y-m-d H:i:s");
      $time = date('h:i', strtotime($currentdatetime));
      
  
      
      $result = $DBHandler_weather->addRecord($loc,$currentdatetime,$temperature,$humidity,$pressure,$light,$irradiance,$uvIntensity,$windSpeed,$windDirection,$rainGuage,$waterLevel,$windDirectionValue,$heatindexdata,$uvIndex,$heatIndexColor,$time);
      
      
      if($result){
          
            echo "Data Saved!";
            
      }else{
          
          echo "Failed to save, something went wrong..";
          
      }
      

       
    }else{
      
        echo"Security key not valid";
    }
    
    
?>