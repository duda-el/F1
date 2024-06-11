<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php';

$sql = "SELECT name, wins FROM drivers ORDER BY wins DESC LIMIT 1";
$result = $conn->query($sql);

$top_driver = $result->fetch_assoc();

header('Content-Type: application/json');
echo json_encode($top_driver);

$conn->close();
?>
