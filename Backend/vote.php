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

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['driver_id'])) {
    $driver_id = $data['driver_id'];

    // Update the vote count
    $sql = "UPDATE drivers_vote SET vote_count = vote_count + 1 WHERE driver_id = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("i", $driver_id);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Vote counted']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to update vote count: ' . $stmt->error]);
        }
        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to prepare statement: ' . $conn->error]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
}

$conn->close();
?>
