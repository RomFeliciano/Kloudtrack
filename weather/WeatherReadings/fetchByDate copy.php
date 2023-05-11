<?php

   require("../classes/dbHandler.php");
   $DBHandler_weather = new DBHandler_weather();

   if(isset($_POST['dateFrom']) && isset($_POST['dateTo']) && isset($_POST['data'])){

        $data = $_POST['data'];
        $dateTo = $_POST['dateTo'];
        $dateFrom = $_POST['dateFrom'];
        $tblname = 'tbl_balanga';

        $query = "SELECT $data , record_dateTime FROM $tblname Where record_dateTime  BETWEEN '$dateFrom' AND '$dateTo' ORDER BY record_dateTime DESC";

        $result = $DBHandler_weather-> runGetQuery($query);

        if($result === "failed to fetch "){

            echo "No Record Yet";

        }else{

            echo json_encode($result);

        }// end of inner if



   } else if(!isset($_POST['dateFrom'])){
    
            echo "No DateFrom";


   } else if(!isset($_POST['dateTo'])){

            echo "No DateTo";


   } else if(!isset($_POST['data'])){


        $dateTo = $_POST['dateTo'];
        $dateFrom = $_POST['dateFrom'];
        $tblname = 'tbl_balanga';

        $query = "SELECT * FROM $tblname Where record_dateTime  BETWEEN '$dateFrom' AND '$dateTo' ORDER BY record_dateTime DESC";

        $result = $DBHandler_weather-> runGetQuery($query);

        if($result === "failed to fetch "){

            echo "No Record Yet";

        }else{

            echo json_encode($result);

        }// end of inner if
    
   } else {

            echo "No Record Yet";

   }
