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
        $this->dbusername = "u583040269_kloudtech";
        $this->dbpassword = "#Admin87493";
        $this->dbname = "u583040269_kloudtech";

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

    }

} //  end of weather classs




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

        $this->dbservername = "u583040269_kloudtech";
        $this->dbusername = "u583040269_kloudtech";
        $this->dbpassword = "#Admin87493";
        $this->dbname = "db_kloudtech_entity";



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


?>