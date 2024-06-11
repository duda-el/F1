<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$grand_prix = $data['grand_prix'];
$race_date = $data['race_date'];
$winner = $data['winner'];
$car = $data['car'];
$laps = $data['laps'];
$race_time = $data['race_time'];

$sql = "INSERT INTO race_results (grand_prix, race_date, winner, car, laps, race_time) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssssss', $grand_prix, $race_date, $winner, $car, $laps, $race_time);

if ($stmt->execute()) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'error' => $stmt->error));
}

$stmt->close();
$conn->close();
?>
