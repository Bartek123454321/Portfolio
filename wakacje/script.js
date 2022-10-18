const today = document.querySelector("#div1");
const holidays = document.querySelector("#div2");
const christmas = document.querySelector("#div4");
const date = new Date();

function getDate() {
    const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", 
    "wrzesień", "październik", "listopad", "grudzień"];
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const day = date.getDay();
    const monthDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    today.innerHTML = `Dziś jest ` + days[day] + ` ${monthDay} ` + months[month] + ` ${year} rok`;
}

function getHolidays() {
    const dataKoncowa = new Date("2023-06-24");

    const ileDni = Math.round((dataKoncowa - date)/(1000*60*60*24));
    holidays.innerHTML = `Do wakacji zostało ${ileDni} dni`;
}

function getChristmas() {
    const dataKoncowa = new Date("2022-12-24");

    const ileDni = Math.round((dataKoncowa - date)/(1000*60*60*24));
    christmas.innerHTML = `Do świąt zostało ${ileDni} dni`;
}

getDate();
getHolidays();
getChristmas();