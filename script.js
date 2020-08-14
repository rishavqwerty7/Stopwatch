var seconds = 0
var minutes = 0;
var hours = 0;

var displayseconds = 0;
var displayminutes = 0;
var displayhours = 0;

var interval = null;
var status = "stopped";

function stopwatch() {
    seconds++;

    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++


        if (minutes / 60 == 0) {
            minutes = 0;
            hours++

        }
    }
    if (seconds < 10) {
        displayseconds = "0" + seconds.toString();
    }
    else {
        displayseconds = seconds;
    }

    if (minutes < 10) {
        displayminutes = "0" + minutes.toString();
    }
    else {
        displayminutes = minutes;
    }

    if (hours < 10) {
        displayhours = "0" + hours.toString();
    }
    else {
        displayhours = hours;
    }

    document.getElementById("display").innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds;
}
function startstop() {
    if (status == "stopped") {
        interval = window.setInterval(stopwatch, 10);
        document.getElementById("display1").innerHTML = "stop"
        document.getElementById("display").style.color = "blue"
        status = "started"
    }
    else {
        window.clearInterval(interval);
        document.getElementById("display1").innerHTML = "start"
        document.getElementById("display").style.color = "green"
        status = "stopped"
    }
}

function reset() {
    window.clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00"
    document.getElementById("display").style.color = "red"


}

