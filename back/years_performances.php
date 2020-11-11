<?php
require 'db.php';

class YearsPerformances
{
    private $db;
    private $conn;

    public function __construct()
    {
        // single tone 
      $this->db = DB::conection();
      $this->conn=$this->db->getConnection();

    }

    public function alldata($year)
    {
        $sql = "SELECT * FROM `years_performances` WHERE `year`=".$year;
        $result = $this->db->queryArray($sql);
        return $result;
    }

}

?>