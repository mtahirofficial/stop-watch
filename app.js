var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function stopwatch() {
    msec++;
    msecHeading.innerHTML = msec;
    if (
        msec >= 100
    ) {
        msecHeading.innerHTML = 0;
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (
        sec >= 60
    ) {
        secHeading.innerHTML = 0;
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    } else if (
        min >= 60
    ) {
        minHeading.innerHTML = 0;
        hour++;
        hourHeading.innerHTML = hour;
        min = 0;
    }
}

function start() {
    interval = setInterval(stopwatch, 10);
    document.getElementById("start").setAttribute("disabled", "disabled");
}

function pause() {
    clearInterval(interval);
    document.getElementById("start").removeAttribute("disabled", "disabled");
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    pause();
    document.getElementById("start").removeAttribute("disabled", "disabled");
}