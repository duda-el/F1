<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight request
    exit(0);
}

$sql = "
    SELECT dv.driver_id, d.name, d.img, d.country_flag, dv.vote_count
    FROM drivers_vote dv
    JOIN drivers d ON dv.driver_id = d.id
";
$result = $conn->query($sql);

$drivers = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $drivers[] = $row;
    }
}

echo json_encode($drivers);

$conn->close();
?>
