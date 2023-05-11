<?php


    header('Content-Type: application/xls');
    //header('Content-Disposition: attachment; filename=Readings.xls');

    date_default_timezone_set("Asia/Manila");
     
      
    $currentdatetime = date("Y-m-d H:i:s");

    if(isset($_POST["dateFrom"]) && isset($_POST["dateTo"]) && isset($_POST['chartDataType'])){
       $filename = $_POST['chartDataType']."_Readings_From-".$_POST["dateFrom"]." -To- ".$_POST["dateTo"].".xls";
       header('Content-Disposition: attachment; filename='.$filename);

    }else{
       header('Content-Disposition: attachment; filename=Readings.xls');

    }

    
  include("../classes/dbHandler.php");

  $DBHandler_weather = new DBHandler_weather();
  

?>


<?php
$chartDataType = "";
$dateFrom ="";
$dateTo="";

//$mysqli -> real_escape_string($_POST['firstname'])
if(isset($_POST["chartDataType"])){

    //$chartDataType = $_POST["chartDataType"];

    $chartDataType = mysqli_escape_string($DBHandler_weather->call_connection(),$_POST["chartDataType"]);

}else{
    $chartDataType = '*';

}


if(isset($_POST["dateFrom"])){

     //$dateFrom = $_POST["dateFrom"];
     $dateFrom  =mysqli_escape_string($DBHandler_weather->call_connection(), $_POST["dateFrom"]);

  
     $newDate = date_create($dateFrom);


     $dateFrom = date_format($newDate,'Y-m-d H:i:s'); 
     //echo $dateFrom;
}else{

}

if(isset($_POST["dateTo"])){

     //$dateTo = $_POST["dateTo"];
     $dateTo = mysqli_escape_string($DBHandler_weather->call_connection(),$_POST["dateTo"]);


     $newDate = date_create($_POST["dateTo"]);

      $dateTo = date_format($newDate,'Y-m-d H:i:s'); 
     //echo $dateTo;
}else{

    $dateTo = $currentdatetime;
}


if($chartDataType === "*"){
  echo "<table> <tr> <th>Date Time </th> <th> Temperature </th> <th> Humidity </th> <th> Air Pressure </th> <th> Light </th> <th> Irradiance </th> </tr> ";

} else{
  echo '<table> <tr>  <th> Date Time </th> <th>'.$chartDataType.'</th> </tr> ';
}






  
   //$query = "SELECT * FROM tbl_balanga WHERE record_dateTime > '$dateFrom' AND record_dateTime < '$dateTo' ORDER BY record_dateTime";

   $loc = 'tbl_balanga';

   $query = "SELECT $chartDataType,record_dateTime FROM $loc Where record_dateTime  BETWEEN '$dateFrom' AND '$dateTo' ORDER BY record_dateTime DESC";

   $result = $DBHandler_weather-> runGetQuery($query);



   if($result === "failed to fetch "){
     echo "No Record Yet";

   }else{
     //echo json_encode($result);

     if($chartDataType === "*"){
           foreach($result as $data){
            print "<tr><td>".$data['record_dateTime']."</td>";
            print "<td>".$data["record_temperature"]."</td>";
            print "<td>".$data['record_humidity']."</td>";
            print "<td>".$data['record_airPressure']."</td>";
            print "<td>".$data['record_light']."</td>";
            print "<td>".$data['record_irradiance']."</td> <tr/>";
          }
     } else{
           foreach($result as $data){
            print "<tr><td>".$data['record_dateTime']."</td>";
            print "<td>".$data["$chartDataType"]."</td> <tr/>";
          }
     }

    }

  
   

?>

</table>