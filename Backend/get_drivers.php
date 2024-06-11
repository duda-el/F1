<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php'; // Ensure this file sets up the $conn variable

if (isset($_GET['id'])) {
  $id = intval($_GET['id']);
  $sql = "SELECT name, color FROM drivers WHERE id = $id";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $driver = $result->fetch_assoc();
    echo json_encode($driver);
  } else {
    echo json_encode(null);
  }
} else {
  echo json_encode(null);
}

$conn->close();
?>
