<?php
// Start a session
session_start();

// Database connection settings
$servername = "swinburnecinemao.byethost6.com";  // Adjust according to your server
$username = "b6_37756723";         // Your MySQL username
$password = "SSC123@";             // Your MySQL password
$dbname = "cinema_booking"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // SQL query to insert new user data into the database
    $sql = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";

    // Prepare the statement to avoid SQL injection
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sss", $username, $email, $password_hash);

        // Execute the query
        if ($stmt->execute()) {
            echo "Sign up successful! You can now <a href='signin.html'>sign in</a>.";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    }

    // Close the connection
    $conn->close();
}
?>
