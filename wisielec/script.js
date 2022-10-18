var body = document.querySelector("body");
var lifesDiv = document.querySelector("#lifes");
var passwordDiv = document.querySelector("#password");
var kategoria = document.querySelector("#category");
var footerData = document.querySelector("#footData")

var wisielecDiv = document.querySelector("#wisielecDiv");
var wisielecImages = [
    "pliki/sznur.png",
    "pliki/wisielec1-1.png",
    "pliki/wisielec1-2.png",
    "pliki/wisielec1-3.png",
    "pliki/wisielec1-4.png",
    "pliki/wisielec1-5.png",
    "pliki/wisielec1-6.png",
    "pliki/wisielec1-7.png",
];
var image;

var passwordButtons;
var randomPass;
var life;

var zycia = 6;
var bool = true;
var licznik = 0;

var liczby = [];


window.addEventListener("keydown",  clickKeyboard);

function clickKeyboard(event) {
    window.removeEventListener("keydown", clickKeyboard);
    setTimeout(klikniecie, 1000)
    bool = false;
    if(liczby.includes((event.key).toUpperCase())) return;
    liczby.push((event.key).toUpperCase());

    for (let j = 0; j < (randomPass.haslo).length; j++) {
        if (event.key == Array.from(randomPass.haslo[j])) {
            document.getElementById(j).innerHTML = event.key.toUpperCase();
            document.getElementById(event.code).style = "background: #080";
            licznik++;
            bool = true;
            body.style = "background: green";
            setTimeout(original, 500);

            setTimeout(checkWin, 3500);
        }
    }

    if (!bool) {
        document.getElementById(event.code).style = "background: #800";
        zycia--;

        body.style = "background: red";
        setTimeout(original, 500);

        setTimeout(checkLose, 3500);
    }

    if(zycia == 0) window.removeEventListener("keydown", clickKeyboard);

    lifes();
    wisielec();
}


function password() {
    var passwords = [
        {
            "haslo": "cypr",
            "kategoria": "geografia",
            "podpowiedz": "Stolica: Nikozja"
        },
        {
            "haslo": "oslo",
            "kategoria": "geografia",
            "podpowiedz": "Stolica i największe miasto Norwegii"
        },
        {
            "haslo": "rzym",
            "kategoria": "geografia",
            "podpowiedz": "Stolica i największe miasto Włoch"
        },
        {
            "haslo": "wegry",
            "kategoria": "geografia",
            "podpowiedz": "Stolica: Budapeszt"
        },
        {
            "haslo": "dania",
            "kategoria": "geografia",
            "podpowiedz": "Państwo położone w Europie Północnej, najmniejsze z państw nordyckich"
        },
        {
            "haslo": "kasza",
            "kategoria": "jedzenie",
            "podpowiedz": "Jadalne nasiona zbóż"
        },
        {
            "haslo": "banan",
            "kategoria": "jedzenie",
            "podpowiedz": "Jadalny owoc tropikalny"
        },
        {
            "haslo": "miod",
            "kategoria": "jedzenie",
            "podpowiedz": "Słodki produkt spożywczy, w warunkach naturalnych wytwarzany głównie przez pszczoły"
        },
        {
            "haslo": "ryz",
            "kategoria": "jedzenie",
            "podpowiedz": "Rodzaj zbóż z rodziny wiechlinowatych"
        },
        {
            "haslo": "mis",
            "kategoria": "kino",
            "podpowiedz": "Polska komedia filmowa w reżyserii Stanisława Barei"
        },
        {
            "haslo": "taxi",
            "kategoria": "kino",
            "podpowiedz": "Seria francuskich filmów komediowych wyprodukowanych przez Luca Bessona"
        },
        {
            "haslo": "shrek",
            "kategoria": "kino",
            "podpowiedz": "Amerykański film animowany z 2001 w reżyserii Andrew Adamsona i Vicky Jenson"
        },
        {
            "haslo": "pila",
            "kategoria": "kino",
            "podpowiedz": "Seria filmów o psychopatycznym zabójcy Johnie Krammerze, granym przez Tobina Bella"
        },
        {
            "haslo": "golf",
            "kategoria": "sport",
            "podpowiedz": "Sport uprawiany na otwartych trawiastych terenach, polegający na kierowaniu małej piłki"
        },
        {
            "haslo": "tenis",
            "kategoria": "sport",
            "podpowiedz": "Dyscyplina sportowa rozgrywana na korcie"
        },
        {
            "haslo": "hokej",
            "kategoria": "sport",
            "podpowiedz": "Sportowa gra zespołowa rozgrywana na lodowisku lub trawie"
        },
        {
            "haslo": "bilard",
            "kategoria": "sport",
            "podpowiedz": "Gra rozgrywana na stole bilardowym"
        },
        {
            "haslo": "calka",
            "kategoria": "nauka",
            "podpowiedz": "Ogólne określenie wielu różnych, choć powiązanych ze sobą pojęć analizy matematycznej"
        },
        {
            "haslo": "dna",
            "kategoria": "nauka",
            "podpowiedz": "Wielkocząsteczkowy organiczny związek chemiczny z grupy kwasów nukleinowych"
        },
        {
            "haslo": "chemia",
            "kategoria": "nauka",
            "podpowiedz": "Nauka przyrodnicza badająca naturę i właściwości substancji, a zwłaszcza przemiany zachodzące pomiędzy nimi"
        },
        {
            "haslo": "atom",
            "kategoria": "nauka",
            "podpowiedz": "Podstawowy składnik materii"
        },
        {
            "haslo": "kot",
            "kategoria": "zwierzeta",
            "podpowiedz": "Udomowiony gatunek ssaka z rzędu drapieżnych"
        },
        {
            "haslo": "pies",
            "kategoria": "zwierzeta",
            "podpowiedz": "Udomowiony gatunek ssaka drapieżnego, podgatunek wilka"
        },
        {
            "haslo": "mysz",
            "kategoria": "zwierzeta",
            "podpowiedz": "Gatunek małego ssaka. Jest gatunkiem synantropijnym"
        },
        {
            "haslo": "zolw",
            "kategoria": "zwierzeta",
            "podpowiedz": "Rząd owodniowców z gromady zauropsydów lub według linneuszowskiej klasyfikacji rząd z gromady gadów"
        },
        {
            "haslo": "zielona mila",
            "kategoria": "kino",
            "podpowiedz": "Amerykański film fabularny z 1999 roku w reżyserii Franka Darabonta, z Tomem Hanksem i Michaelem Duncanem w rolach głównych"
        },
        {
            "haslo": "wladca pierscieni",
            "kategoria": "kino",
            "podpowiedz": "Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona"
        },
        {
            "haslo": "breaking bad",
            "kategoria": "tv show",
            "podpowiedz": "Amerykański serial telewizyjny z gatunku dramatu kryminalnego stworzony przez Vince’a Gilligana i kręcony w Albuquerque w Nowym Meksyku"
        }
    ];
    
    randomPass = passwords[Math.floor(Math.random() * passwords.length)];
    for (let i = 0; i < (randomPass.haslo).length; i++) {
        passwordButtons = document.createElement("button");
        passwordButtons.disabled = true;
        passwordButtons.id = i;
        var passwordSplit = Array.from(randomPass.haslo);
        if (passwordSplit.includes(' ')) licznik=1;
        //passwordButtons.innerHTML = passwordSplit[i];
        passwordDiv.appendChild(passwordButtons);
    }
}


function lifes() {
    lifesDiv.replaceChildren();
    for (let i = 0; i < zycia; i++) {
        life = document.createElement("img");
        life.src = "pliki/heart.png";
        life.className = "img";
        lifesDiv.appendChild(life);
    }
}


function lifesBeginning() {
    for (let i = 0; i < zycia; i++) {
        life = document.createElement("img");
        life.src = "pliki/heart.png";
        life.className = "img";
        lifesDiv.appendChild(life);
    }
}


function wisielec() {
    wisielecDiv.innerHTML = ""
    var sznur = document.createElement("img");
    sznur.src = wisielecImages[0];
    sznur.id = "sznur";
    wisielecDiv.appendChild(sznur);

    image = document.createElement("img");
    
    switch (zycia) {
        case 0:
            image.src = wisielecImages[7];
            break;
        case 1:
            image.src = wisielecImages[6];
            break;
        case 2:
            image.src = wisielecImages[5];
            break;
        case 3:
            image.src = wisielecImages[4];
            break;
        case 4:
            image.src = wisielecImages[3];
            break;
        case 5:
            image.src = wisielecImages[2];
            break;
        case 6:
            image.src = wisielecImages[1];
            break;
    }
    wisielecDiv.appendChild(image);
}


function checkLose() {
    if (zycia == 0) {
        alert('Przegrales');
        window.location.reload();
    }
}

function checkWin() {
    if (licznik == (randomPass.haslo).length) {
        alert("Wygrales");
        window.location.reload();
    }
}


function category() {
    kategoria.innerHTML = "Kategoria: " + (randomPass.kategoria).toUpperCase() ;
    kategoria.style.fontFamily = 'Salsa, monospace';
}


function hint() {
    alert(randomPass.podpowiedz);
}


function klikniecie() {
    window.addEventListener("keydown", clickKeyboard)
}

function original() {
    body.style = "background: rgb(36, 34, 34)";
}


function data() {
    const date = new Date();
    const day = date.getDay();
    const monthDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const Days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const Months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Pażdziernik', 'Listopad', 'Grudzień'];

    const local = date.toLocaleString();
    local.replace(",", "-")
    const time = local.substr(10);

    
    footerData.innerHTML = `${Days[day]} ${monthDay} ${Months[month]} ${year} ${time}`;
}


lifesBeginning();
password();
wisielec();
category();
setInterval(data, 1000);