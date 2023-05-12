<?php

  require("../classes/dbHandler.php");

  

  if(isset($_POST["fetchkey"])){

    $fetchkey = $_POST["fetchkey"];
    //$fetchkey = "A197C";

    $fetchkeyValue = "A197C";

      if( $fetchkey === $fetchkeyValue){

        $DBHandler_weather = new DBHandler_weather();

        $query = mysqli_escape_string($DBHandler_weather->call_connection(),"SELECT * FROM tbl_balanga ORDER BY record_dateTime DESC LIMIT 10");

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