<?php
function OpenCon() {
    $server= "localhost";
    $user = "root";
    $passwd = "";
    $db = "morse";

    $conn = new mysqli($server, $user, $passwd, $db) or die("Problemy z połączeniem");

    return $conn;
}

function CloseCon($conn) {
    $conn->close();
}
?>