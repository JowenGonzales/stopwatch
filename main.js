var hourspan = document.getElementById("hourspan");
var minutespan = document.getElementById("minutespan");
var secondspan = document.getElementById("secondspan");
var countspan = document.getElementById("countspan");
let timer = true;

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;


function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    hour = 0;
    minute = 0;
    seconds = 0;
    count = 0;


    hourspan.innerHTML = "00";
    minutespan.innerHTML = "00";
    secondspan.innerHTML = "00";
    countspan.innerHTML = "00";

}


function stopwatch() {
    if (timer) {
        
    count++;
    if (count == 100) {
        second++;
        count = 0;
    }
    if (second == 60) {
        minute++;
        second = 0;
    }
    if (minute == 60) {
        hour++;
        second = 0;
    }
    let hourstring = hour;
    let minutestring = minute;
    let secondstring = second;
    let countstring = count;

    if (hour < 10) {
        hourstring = "0" + hourstring;
    }
    if (minute < 10) {
        minutestring = "0" + minutestring;
    }
    if (second < 10) {
        secondstring = "0" + secondstring;
    }
    if (count < 10) {
        countstring = "0" + countstring;
    }
    
    hourspan.innerHTML = hourstring;
    minutespan.innerHTML = minutestring;
    secondspan.innerHTML = secondstring;
    countspan.innerHTML = countstring;


    setTimeout(stopwatch, 10);
    }
}

