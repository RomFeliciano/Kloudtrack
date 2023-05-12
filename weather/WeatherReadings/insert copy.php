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
    $uvIntensity = "0";
    $windDirection = "0";
    $windSpeed = "0";
    $rainGuage = "0";
    $waterLevel = "0";
    
    
    if (isset($_POST['key'])){
    
            $key = $_POST['key'];
    }

    if (isset($_POST['loc'])){
    
            $loc = $_POST['loc'];
    }
    
    if (isset($_POST['temperature'])) {
    
            $temperature = $_POST['temperature'];
  
    } 
    
    if (isset($_POST['humidity'])) {
    
            $humidity = $_POST['humidity'];
    }
    
    if (isset($_POST['pressure'])) {
    
            $pressure = $_POST['pressure'];
    }
    
    if (isset($_POST['light'])) {
    
            $light = $_POST['light'];
    } 
    
    
    if (isset($_POST['irradiance'])) {
    
            $irradiance = $_POST['irradiance'];
    }

    if (isset($_POST['uvIntensity'])) {
    
            $uvIntensity = $_POST['uvIntensity'];
    }

    if (isset($_POST['windDirection'])) {
    
            $windDirection = $_POST['windDirection'];
    }

    if (isset($_POST['windSpeed'])) {
    
            $windSpeed = $_POST['windSpeed'];
    }

    if (isset($_POST['rainGauge'])) {
    
            $rainGuage = $_POST['rainGauge'];
    }

    if (isset($_POST['waterLevel'])) {
    
            $waterLevel = $_POST['waterLevel'];
    }

    
    
    
    
    if ($key === $fetchKeyValue ) {
    
      date_default_timezone_set("Asia/Manila");
     
      
      $currentdatetime = date("Y-m-d H:i:s");
      $currentTime = date("H:i:s",strtotime($currentdatetime));
      
      $query = mysqli_escape_string($DBHandler_weather->call_connection(),"INSERT INTO tbl_balanga(record_id, record_barangay, record_dateTime, record_temperature , record_humidity , record_airPressure, record_light , record_irradiance, record_uvIntensity, record_windSpeed, record_windDirection, record_rainGauge, record_waterLevel,record_time) VALUES(0, '$loc','$currentdatetime', '$temperature', '$humidity','$pressure','$light' , '$irradiance','$uvIntensity','$windSpeed','$windDirection','$rainGuage','$waterLevel','$currentTime');");
      $DBHandler_weather->runInsertQuery($query);
      
      

       
    }
    
    
?>