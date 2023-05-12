<?php

  require("../classes/dbHandler.php");

  

  if(isset($_POST["fetchkey"])){

    $fetchkey = $_POST["fetchkey"];
    $date = $_POST["date"];
    $timefrom = $_POST["timefrom"];
    $timeto = $_POST["timeto"];
   

    $fetchkeyValue = "A197C";

      if($fetchkey === $fetchkeyValue){

        $DBHandler_weather = new DBHandler_weather();

        
        $query = "SELECT * FROM tbl_balanga WHERE record_date = '$date' AND record_time BETWEEN $timefrom AND $timeto";
      
        //echo $query;
        $result = $DBHandler_weather-> runGetQuery($query);

        if($result === "failed to fetch "){

          echo "failed to fetch";

        }else{

          echo json_encode($result);
        }// end of inner inner if

      } else{

        echo "fetchkey wrong";
      } // end of inner if

  } else{

        echo "fetchkey not set";

  } // end of if



?>