<?php
include ' funcion.php';
if(isset($_GET['movie'])){
    $data = get_single_video($conn,$_GET['movie']);
    echo json_encode($data);
}
else{
    $data = get_a;;_video($conn);
    echo json_encode($data);
}
?>