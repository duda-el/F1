<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include_once './db_connect.php'; // Ensure this file sets up the $conn variable

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    fetchUsers($conn);
} elseif ($method === 'PUT') {
    editUser($conn);
} elseif ($method === 'DELETE') {
    deleteUser($conn);
    reassignIDs($conn);
} else {
    echo json_encode(["error" => "Invalid request method"]);
}

function fetchUsers($conn) {
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);
    $users = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = $row;
        }
    }
    echo json_encode($users);
}

function editUser($conn) {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];
    $role = $data['role'];

    $sql = "UPDATE users SET name='$name', email='$email', role='$role' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "User updated successfully"]);
    } else {
        echo json_encode(["error" => "Error updating user: " . $conn->error]);
    }
}

function deleteUser($conn) {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];

    $sql = "DELETE FROM users WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "User deleted successfully"]);
    } else {
        echo json_encode(["error" => "Error deleting user: " . $conn->error]);
    }
}

function reassignIDs($conn) {
    $sql = "SET @count = 0";
    $conn->query($sql);

    $sql = "UPDATE users SET id = @count:= @count + 1";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "IDs reassigned successfully"]);
    } else {
        echo json_encode(["error" => "Error reassigning IDs: " . $conn->error]);
    }

    $sql = "ALTER TABLE users AUTO_INCREMENT = 1";
    $conn->query($sql);
}

$conn->close();
?>
