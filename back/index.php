<?php

  header("Access-Control-Allow-Origin: *");

 require 'years_performances.php';

 $yearsPerformances = new YearsPerformances();
 
 if(isset($_SERVER["REQUEST_URI"])){

    if($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["year"])){

            $allData = $yearsPerformances->alldata($_GET["year"]);
            
            print_r(json_encode($allData));

    }
}
         







?>