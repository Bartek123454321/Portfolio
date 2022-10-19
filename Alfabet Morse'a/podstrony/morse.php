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
    <form action="" method="POST">
        <main>
            <aside>
                <button type="submit" name="option" value="latina" class="asideButton">ŁACINA > MORS</button>
                <button type="submit" name="option" value="morse" class="asideButton">MORS > ŁACINA</button>
                <a href="alfabet.php"><button type="button" class="asideButton">ALFABET MORSE`A</button></a>
                <button type="submit" name="option" value="morse" class="asideButton">RESET</button>
            </aside>
            <section class="section">
                <section class="section1">
                    <section class="buttons">
                        <button type="button" name="dot"  class="button" id="dot" value="•" onclick="wpiszDot()">•</button>
                        <button type="button" name="dash" class="button" id="dash" value="—" onclick="wpiszDash()">—</button>
                        <button type="reset" name="reset" class="button" id="reset" onclick="resetText()">Reset</button>
                        <button type="button" name="space" class="button" id="space" onclick="spaceBar()">Spacja</button>
                    </section>
                </section>
                <section class="section2">
                    <?php
                    require_once("connect.php");
                    $conn = OpenCon();
                    $q = "SELECT znak_l, znak_m FROM alfabet";
                    $result = mysqli_query($conn, $q);
                    echo "<table>";
                    echo "<tr>" . "<th> Litera </th>" . "<th> Morse </th> </tr>";
                    while($row = mysqli_fetch_array($result)) {
                        echo "<tr>" . "<td>" . $row['znak_l'] . "</td>";
                        echo "<td>" . $row['znak_m'] . "</td>" . "</tr>";
                    }
                    echo "</table>";
                    ?>
                </section>
                <section class="section3">
                    <section class="output">
                        <label for="label">Podaj ciąg znaków</label> <br>
                        <textarea name="znaki" id="znaki" cols="30" rows="8" autofocus></textarea>
                    </section>
                </section>
                <section class="result">
                    <p>
                    <?php
                    if(isset($_POST["option"]) && isset($_POST["znaki"])) {
                    $text = str_split($_POST["znaki"]);
                    $option = $_POST["option"];
                    switch($option) {
                        case 'latina':
                            for($x = 0; $x < count($text); $x++){
                                if($text[$x] == " "){
                                    echo "&nbsp;";
                                }
                                $q = "SELECT znak_m FROM alfabet WHERE znak_l=" . "'" . $text[$x] . "'";
                                $result = mysqli_query($conn, $q);
                                if($result) {
                                    while($row = mysqli_fetch_row($result)) {
                                        echo $row[0] . " ";
                                    }
                                }
                            }
                            break;
                        case 'morse':
                            $wyraz = "";
                            for($x = 0; $x < count($text); $x++){
                                if($text[$x] == " " && $text[$x+1] == " "){
                                    $q = "SELECT znak_l FROM alfabet WHERE znak_m=" . "'" . $wyraz . "'";
                                    $result = mysqli_query($conn, $q);
                                    if($result) {
                                        while($row = mysqli_fetch_row($result)) {
                                            echo $row[0] . " ";
                                        }
                                    }
                                    $wyraz = "";
                                    echo "&nbsp;";
                            } else if($text[$x] == " ") {
                                $q = "SELECT znak_l FROM alfabet WHERE znak_m =" . "'" . $wyraz . "'";
                                    $result = mysqli_query($conn,$q);
                                    if($result){
                                        while($row = mysqli_fetch_row($result)){
                                            echo $row[0];
                                        }
                                    }
                                    $wyraz = "";
                                } else {
                                    $wyraz = $wyraz . $text[$x];
                                }
                            }

                            $q = "SELECT znak_l FROM alfabet WHERE znak_m =" . "'" . $wyraz . "'";
                            $result = mysqli_query($conn, $q);
                            if($result){
                                while($row = mysqli_fetch_row($result)){
                                    echo $row[0];
                                }
                            }
                            break;
                        }
                    } 
                    CloseCon($conn);
                    ?>
                </p>
            </section>
        </main>
    </form>
    <footer><p>Stronę wykonał: Bartosz Szulc</p></footer>
    <script src="../pliki/script.js"></script>
</body>
</html>