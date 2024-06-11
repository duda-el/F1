<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php';


$sql = "SELECT grand_prix, race_date, winner, car, laps, race_time FROM race_results";
$result = $conn->query($sql);

$raceResults = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $raceResults[] = $row;
    }
} else {
    echo json_encode(array('message' => 'No results found'));
    $conn->close();
    exit();
}

$conn->close();

echo json_encode($raceResults);
?>
