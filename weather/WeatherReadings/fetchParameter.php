<?php

/*

   // if(isset($_POST['fetchkey'])){

        //$fetchkey = $_POST['fetchkey'];

        //if($fetchkey === "A1289"){

          
            $db = new PDO('sqlite:readingsDB12.sqlite');

            $query = "SELECT * FROM readings ORDER BY date DESC LIMIT 10";
            $result = $db->query($query);
            
            $resultarray = array();
            
            foreach($result as $row) {
                 $resultarray[] =  array( "date" => $row['date'] , 
                                              "distance" => $row['distance'],
                                              "Humidity" => $row['Humidity'],
                                              "Pressure" => $row['Pressure'], 
                                              "LightMeter" => $row['LightMeter'],
                                              "LightMeter683" => $row['LightMeter683']
                                             );
            
                
                
            }
            
            echo json_encode($resultarray);
        //}

        //}







   // }
   */


   require("../classes/dbHandler.php");
   $DBHandler_weather = new DBHandler_weather();


   // do this when want to get specific type of data (parameter)
   if(isset($_POST['param']) && isset($_POST["myLoc"])){
       $param = mysqli_escape_string($DBHandler_weather->call_connection(),$_POST["param"]);
       $myLoc = mysqli_escape_string($DBHandler_weather->call_connection(), $_POST["myLoc"]);
       $query = mysqli_escape_string($DBHandler_weather->call_connection(),"SELECT $param , record_dateTime FROM $myLoc ORDER BY record_dateTime DESC LIMIT 20");

      $result = $DBHandler_weather-> runGetQuery($query);

     if($result === "failed to fetch "){
         echo "failed to fetch";
     }else{
         echo json_encode($result);
    }

   }


   // do this when want to get all data (parameter)
   if(!isset($_POST['param']) && isset($_POST["myLoc"])){
       $myLoc = mysqli_escape_string($DBHandler_weather->call_connection(), $_POST["myLoc"]);
       $query = mysqli_escape_string($DBHandler_weather->call_connection(),"SELECT * FROM $myLoc ORDER BY record_dateTime DESC LIMIT 20");

      $result = $DBHandler_weather-> runGetQuery($query);

     if($result === "failed to fetch "){
         echo "failed to fetch";
     }else{
         echo json_encode($result);
    }

   }




?>