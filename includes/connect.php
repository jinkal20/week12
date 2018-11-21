<?php
 $user="root";
 $ps="";
 try{
     $conn = new PDO('mysql:host=local;dbname=db_week12, $user,$ps');
 }
 catch(PDOException $exception ){
    echo'connect error !' . exception->getmessage();
 }
?>