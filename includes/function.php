<?php
include 'connect.php';
function get_single_video($pdo,$vid){
    $query ="SELECT * FROM video where id ='$vid'";

    $get_video = $pdo->query($query);
    $results = array();

    while ($row = $get_video->fetch(PDO::FETCH_ASSOC)){
        $results[] = row;
    }

    return $results;
}

function get_all_video($pdo){
    $query ="SELECT * FROM video";

    $get_video = $pdo=>query($query);
    $results = array();
    
    while ($row = $get_video->fetch(PDO::FETCH_ASSOC)){
        $results[] = row;
    }

    return $results;
}
?>