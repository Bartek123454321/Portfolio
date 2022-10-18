function dataOutput() {
    const data = new Date();
    const day = data.getDate();
    const week = data.getDay();
    const month = data.getMonth();
    const year = data.getFullYear();

    const DniTygodnia = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const Miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Pażdziernik', 'Listopad', 'Grudzień'];

    const footerdata = document.querySelector('#footer2');

    footerdata.innerHTML = `${DniTygodnia[week]} ${day} ${Miesiace[month]} ${year}`;
}

function nameB() {
    const name = document.querySelector('#name');
    name.style.fontWeight <= "100" ? name.style.fontWeight = "900" :  name.style.fontWeight = "100"
}
function nameU() {
    const name = document.querySelector('#name');
    name.style.textDecoration != 'underline' ? name.style.textDecoration = 'underline' :  name.style.textDecoration = 'none';
}
function nameI() {
    const name = document.querySelector('#name');
    name.style.fontStyle != 'italic' ? name.style.fontStyle = 'italic' :  name.style.fontStyle = 'normal';
}
function nameRed() {
    const name = document.querySelector('#name');
    name.style.color != "red" ? name.style.color = "red"  :  name.style.color = "black";
}
function nameViolet() {
    const name = document.querySelector('#name');
    name.style.color != "violet" ? name.style.color = "violet"  :  name.style.color = "black";
}
function nameYellow() {
    const name = document.querySelector('#name');
    name.style.color != "yellow" ? name.style.color = "yellow"  :  name.style.color = "black";
}

function arytmetyczny() {
    const an = parseInt(document.querySelector('#an').value);
    const a1 = parseInt(document.querySelector('#a1').value);
    const n = parseInt(document.querySelector('#n').value);
    const r = parseInt(document.querySelector('#r').value);
    const aryt = document.querySelector('#arytmetyczny');

    aryt.innerHTML = a1 + (n-1) * r;
}

/*
function geometryczny() {
    const an = document.querySelector('#an');
    const a1 = document.querySelector('#a1');
    const n = document.querySelector('#n');
    const q = document.querySelector('#q');
    const geo = document.querySelector('#geometryczny');

    geo.innerHTML = `n${an.value} = ${a1.value}` * (`${q.value}`) * `${n.value}` - 1;
}
*/

function passwordCheck() {
    const password = document.querySelector('#password').value;
    const passwordOutput = document.querySelector('#passwordOutput');
    const reg = /^(?=[A-Z]{1,}).*(?=[a-z]{1,}).*(?=[0-9]{1,}).*(?=[!@#\$%\^&\*]{1,}).*$/

    passwordOutput.innerHTML = reg.test(password) ? "Prawidłowe" : 'Nieprawidłowe';
}

dataOutput();