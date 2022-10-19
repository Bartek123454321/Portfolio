<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alfabet Morse'a</title>
    <link rel="stylesheet" href="../pliki/style.css">
</head>
<body>
    <header><a href="../index.html">Alfabet Morse'a</a></header>
    <main>
        <aside>
            <a href="morse.php"><button style="background-color: rgb(65, 217, 228)">ŁACINA > MORS</button></a>
            <a href="morse.php"><button style="background-color: rgb(65, 217, 228)">MORS > ŁACINA</button></a>
        </aside>
        <section class="alfabet">
            <?php
            require_once("connect.php");
            $conn = OpenCon();
             $q = "SELECT znak_l, znak_m FROM alfabet";
             $result = mysqli_query($conn, $q);
             echo "<table class=tableAlfabet>";
             echo "<tr>" . "<th> Litera </th>" . "<th> Morse </th> </tr>";
             while($row = mysqli_fetch_array($result)) {
                 echo "<tr>" . "<td>" . $row['znak_l'] . "</td>";
                 echo "<td>" . $row['znak_m'] . "</td>" . "</tr>";
             }
             echo "</table>";
            CloseCon($conn);
            ?>
        </section>
    </main>
    <footer><p>Stronę wykonał: Bartosz Szulc</p></footer>
</body>
</html>