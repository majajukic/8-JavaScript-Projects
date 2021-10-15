let secondsPlaceholder = document.querySelector(".seconds");
let minutesPlaceholder = document.querySelector(".minutes");
let hoursPlaceholder = document.querySelector(".hours");
let daysPlaceholder = document.querySelector(".days");

const newYear = new Date("December 31, 2021 0:0:0").getTime();

const calcTimeLeft = setInterval(() => {
    const now = new Date().getTime();
    let timeLeft = newYear - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    secondsPlaceholder.innerHTML = seconds;
    minutesPlaceholder.innerHTML = minutes;
    hoursPlaceholder.innerHTML = hours;
    daysPlaceholder.innerHTML = days;

}, 1000);
