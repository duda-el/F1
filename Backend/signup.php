<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php'; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = isset($data['name']) ? trim($data['name']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';

    if (empty($name) || empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
        exit();
    }

    // ვამოწმებთ იმეილი უკვე თუ არსებობს
    $query_check_email = "SELECT * FROM users WHERE email = ?";
    $stmt_check_email = $conn->prepare($query_check_email);
    $stmt_check_email->bind_param("s", $email);
    $stmt_check_email->execute();
    $result_check_email = $stmt_check_email->get_result();

    if ($result_check_email->num_rows > 0) {
        echo json_encode(['status' => 'error', 'message' => 'Email already exists.']);
        exit();
    }

    // Insert new user
    $query_insert_user = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt_insert_user = $conn->prepare($query_insert_user);
    $stmt_insert_user->bind_param("sss", $name, $email, $password);
    
    if ($stmt_insert_user->execute()) {
        $user_id = $stmt_insert_user->insert_id;
        $new_user = ['id' => $user_id, 'name' => $name, 'email' => $email]; // You can modify this as per your user table structure
        $_SESSION['user'] = $new_user;
        echo json_encode(['status' => 'success', 'user' => $new_user]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to create user.']);
    }
    exit();
}
?>
