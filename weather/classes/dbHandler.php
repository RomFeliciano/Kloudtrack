<?php

// monitoring systems

class DBHandler_weather {
 
        protected $dbservername;
        protected $dbusername;
        protected $dbpassword;
        protected $dbname;
        protected $dbconnection;



    function __construct(){
    
        /* Localhost connection */
    
    
        
        $this->dbservername = "localhost";
        $this->dbusername = "root";
        $this->dbpassword = "";
        $this->dbname = "db_kloudtech_weather";
        

        /* Hostinger connection */

        /*
        $this->dbservername = "localhost";
        $this->dbusername = "u583040269_kloudtech_admn";
        $this->dbpassword = "#Admin78209";
        $this->dbname = "u583040269_kloudtech_wthr";
        */
        


        $this-> dbconnection = mysqli_connect($this->dbservername,$this->dbusername,$this->dbpassword,$this->dbname);
 
  

        // for error message
        if (mysqli_connect_errno()) {
            $errorlog = "MySQL Error: " . mysqli_connect_errno();
            exit($errorlog);
        }
    

    }


    function __destruct(){

        if(isset($this->dbconnection)){
            mysqli_close($this->dbconnection);
        }

    }


    public function call_connection(){
        return $this->dbconnection;

    }


    
    public function escape_string($query){

        $query = $query;

	
        $result = mysqli_real_escape_string($this->dbconnection, $query);
   
   
        return $result;

    }

    public function runInsertQuery($query){

        $query = mysqli_real_escape_query($this->dbconnection, $query);

	
        $result = mysqli_query($this->dbconnection, $query);
   
   
        return $result;

    }

    public function runQuery($query){

        $query = $query;

        echo $query;
        
        $result = mysqli_query($this->dbconnection, $query);

        

        $row = mysqli_fetch_assoc($result);
   
        return $row;

    }


    public function runGetQuery($query){
        $query = $query;
       // echo $query;

        $result = mysqli_query($this->dbconnection,$query);
       // echo $query;

        $resultCheck =  mysqli_num_rows($result);
        $data = array();

        if($resultCheck > 0){
            while($row = mysqli_fetch_assoc($result)){
                


                $data[] = $row;
                
             
            }

            echo mysqli_error($this->dbconnection);
            return $data;
        
        } else{

            return "failed to fetch ";
        }

    }
    
    
    // function that adds record to weather database
    public function addRecord($loc,$currentdatetime,$temperature,$humidity,$pressure,$light,$irradiance,$uvIntensity,$windSpeed,$windDirection,$rainGuage,$waterLevel,$windDirectionValue,$heatindex,$uvIndex,$heatIndexColor,$time,$date){
        
        
        $loc = mysqli_real_escape_string($this->dbconnection,$loc);
        $currentdatetime = mysqli_real_escape_string($this->dbconnection,$currentdatetime);
        $temperature = mysqli_real_escape_string($this->dbconnection,$temperature);
        $humidity = mysqli_real_escape_string($this->dbconnection,$humidity);
        $pressure = mysqli_real_escape_string($this->dbconnection,$pressure);
        $light = mysqli_real_escape_string($this->dbconnection,$light);
        $irradiance = mysqli_real_escape_string($this->dbconnection,$irradiance);
        $uvIntensity = mysqli_real_escape_string($this->dbconnection,$uvIntensity);
        $windSpeed = mysqli_real_escape_string($this->dbconnection,$windSpeed);
        $windDirection = mysqli_real_escape_string($this->dbconnection,$windDirection);
        $rainGuage = mysqli_real_escape_string($this->dbconnection,$rainGuage);
        $waterLevel = mysqli_real_escape_string($this->dbconnection,$waterLevel);
        $windDirectionValue = mysqli_real_escape_string($this->dbconnection,$windDirectionValue);
        $heatindex = mysqli_real_escape_string($this->dbconnection,$heatindex);
        $uvIndex = mysqli_real_escape_string($this->dbconnection,$uvIndex);
        $heatIndexColor = mysqli_real_escape_string($this->dbconnection,$heatIndexColor);
        $time = mysqli_real_esape_string($this->dbconnection,$time);
        $date =  mysqli_real_esape_string($this->dbconnection,$date);
        
        $query = "INSERT INTO tbl_balanga(record_id, record_barangay, record_dateTime, record_temperature , record_humidity , record_airPressure, record_light , record_irradiance, record_uvIntensity, record_windSpeed, record_windDirection, record_rainGauge, record_waterLevel, record_windDirectionValue, record_heatIndex, record_uvIndex, record_heatIndexColor,record_time,record_date) VALUES(0, '$loc','$currentdatetime', '$temperature', '$humidity','$pressure','$light' , '$irradiance','$uvIntensity','$windSpeed','$windDirection','$rainGuage','$waterLevel','$windDirectionValue','$heatindex','$uvIndex','$heatIndexColor','$time','$date');";
        
        $result = mysqli_query($this->dbconnection,$query);
        
        return $result;
        
        
    } // end of function
    
    
    

} //  end of weather classs


// users and subscribers

class DBHandler_user {
 
        private $dbservername;
        private $dbusername;
        private $dbpassword;
        private $dbname;
        private $dbconnection;



    function __construct(){
    
        /* Localhost connection */
    
    
        /*
        $this->dbservername = "localhost";
        $this->dbusername = "root";
        $this->dbpassword = "";
        $this->dbname = "db_kloudtech_entity";
        */


        /* Hostinger connection */

        $this->dbservername = "localhost";
        $this->dbusername = "u583040269_kloudtech_adm";
        $this->dbpassword = "#Admin78209";
        $this->dbname = "u583040269_kloudtech_user";



        $this-> dbconnection = mysqli_connect($this->dbservername,$this->dbusername,$this->dbpassword,$this->dbname);
 
  

        // for error message
        if (mysqli_connect_errno()) {
            $errorlog = "MySQL Error: " . mysqli_connect_errno();
            exit($errorlog);
        }
    

    }


    function __destruct(){

        if(isset($this->dbconnection)){
            mysqli_close($this->dbconnection);
        }

    }



    public function call_connection(){
        return $this->dbconnection;

    }
    
    public function runInsertQuery($query){

        $query = $query;

        $result = mysqli_query($this->dbconnection, $query);
   
        return $result;
    }

    public function runQuery($query){

        $query = $query;

        $result = mysqli_query($this->dbconnection, $query);

        $row = mysqli_fetch_assoc($result);
   
        return $row;

    }


    public function runGetQuery($query){
        $query = $query;

        $result = mysqli_query($this->dbconnection,$query);
        $resultCheck =  mysqli_num_rows($result);
        $data = array();

        if($resultCheck > 0){
            while($row = mysqli_fetch_assoc($result)){
                


                $data[] = $row;
                
             
            }

            echo mysqli_error($this->dbconnection);
            return $data;
        
        } else{

            return "failed to fetch ";
        }

    } // end of function


    public function checkExists($query){
        $query = $query;

        $result = mysqli_query($this->dbconnection,$query);
        $resultCheck =  mysqli_num_rows($result);
      
        if($resultCheck > 0){
            
            return true;

        } else{

            return false;
        }

           

    } // end of function


    

}// end of user class



class DBHandler_subscriber extends DBHandler_user{
    
     
        private $dbservername;
        private $dbusername;
        private $dbpassword;
        private $dbname;
        private $dbconnection;



    function __construct(){
    
        /* Localhost connection */
    
    
        /*
        $this->dbservername = "localhost";
        $this->dbusername = "root";
        $this->dbpassword = "";
        $this->dbname = "db_kloudtech_entity";
        */


        /* Hostinger connection */

        $this->dbservername = "localhost";
        $this->dbusername = "u583040269_kloudtech_adm";
        $this->dbpassword = "#Admin78209";
        $this->dbname = "u583040269_kloudtech_user";



        $this-> dbconnection = mysqli_connect($this->dbservername,$this->dbusername,$this->dbpassword,$this->dbname);
 
  

        // for error message
        if (mysqli_connect_errno()) {
            $errorlog = "MySQL Error: " . mysqli_connect_errno();
            exit($errorlog);
        }
    

    }


    function __destruct(){

        if(isset($this->dbconnection)){
            mysqli_close($this->dbconnection);
        }

    }
    
    public function addSubscriber($fullName,$Email){
         $fullName = mysqli_real_escape_string($this->dbconnection,$fullName);
         $Email =  mysqli_real_escape_string($this->dbconnection,$Email);
         $tablename = 'tbl_user_subscribers';
         
         $query = "INSERT INTO $tablename VALUES(0,'$fullName','$Email')";
         $result = mysqli_query($this->dbconnection,$query);
         
         if($result === true){
            
             return true;
         } else{
             
             return false;
         }
        
        
    }
    
    public function addContactRecord($firstName,$lastName,$date,$Email,$message){
         $firstName = mysqli_real_escape_string($this->dbconnection,$firstName);
         $lastName = mysqli_real_escape_string($this->dbconnection,$lastName);
         $date = mysqli_real_escape_string($this->dbconnection,$date);
         $Email =  mysqli_real_escape_string($this->dbconnection,$Email);
         $message = mysqli_real_escape_string($this->dbconnection,$message);
         $tablename = 'tbl_user_contactus';
         
         $query = "INSERT INTO $tablename VALUES(0,'$firstName','$lastName','$date','$Email','$message')";
         $result = mysqli_query($this->dbconnection,$query);
         
         if($result=== true){
      ;
             return true;
         } else{
           
             return false;
         }
        
        
    }
    
    public function checkEmailExists($email){
        $email =  mysqli_real_escape_string($this->dbconnection,$email);
        
        $query = "SELECT record_UserEmail FROM tbl_user_subscribers WHERE record_UserEmail = '$email'";

        $result = mysqli_query($this->dbconnection,$query);
        $resultCheck =  mysqli_num_rows($result);
      
        if($resultCheck > 0){
            
            return true;

        } else{

            return false;
        }

           

    } // end of function



    

}// end of user class


?>