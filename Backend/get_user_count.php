<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php'; // Ensure this file sets up the $conn variable

$sql = "SELECT COUNT(*) as count FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(["count" => $row["count"]]);
} else {
    echo json_encode(["count" => 0]);
}

$conn->close();
?>
