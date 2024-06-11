<?php
include 'db_connect.php'; 

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$sql = "SELECT title, location, date, flag FROM schedule"; // Changed column name to 'flag'
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo json_encode([]);
}

echo json_encode($data);

$conn->close();
?>
