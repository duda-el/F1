<?php
session_start();
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php'; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    #json_decode ფუნქცია აკონვერტირებს json-ში დაფორმატებულ string-ს php ცვლადად
    #To access the body
    $data = json_decode(file_get_contents('php://input'), true);

    $email = isset($data['email']) ? trim($data['email']) : '';
    $password = isset($data['password']) ? trim($data['password']) : '';


    if (empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
        exit();
    }

    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        while ($item = mysqli_fetch_assoc($result)) {
            if ($password === $item['password']) {
                $_SESSION['user'] = $item;
                // Fetch role and include it in the response
                $role = $item['role'];
                echo json_encode(['status' => 'success', 'user' => $item, 'role' => $role]);
                exit(); 
            }
        }
        echo json_encode(['status' => 'error', 'message' => 'Invalid credentials.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid credentials.']);
    }
    exit();
}
?>
