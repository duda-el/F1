<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);
$searchTerm = isset($data['searchTerm']) ? $data['searchTerm'] : '';

if (empty($searchTerm)) {
    echo json_encode([]);
    exit();
}

$searchTerm = '%' . $searchTerm . '%';
$sql = "SELECT id, name, team, country, img FROM drivers WHERE name LIKE ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

$drivers = [];
while ($row = $result->fetch_assoc()) {
    $drivers[] = $row;
}

echo json_encode($drivers);

$stmt->close();
$conn->close();
?>
