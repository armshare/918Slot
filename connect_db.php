
<?php
$servername = "localhost";
$username = "slot_me";
$password = "TJnrEBpAufVI";
$dbname = "slot_me";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_set_charset($conn,"utf8");
?>
