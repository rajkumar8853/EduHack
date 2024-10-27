<?php
$servername = "localhost";  
$username = "root";         
$password = "Rajkumar-2005";             
$dbname = "career_guidance";  


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
