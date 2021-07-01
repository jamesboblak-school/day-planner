var updateTime = function () {
    var currentTime = moment().format("h:mm:ss, MMM Do, YYYY", "hh:mm:ss");
    $("#currentDay").text(currentTime);
}
updateTime();
setInterval(updateTime, 1000);

function colorBarClock() {
    var currentTime = moment();
    var startTime = moment('08:00 am', "HH:mm a");
    // currentTime.toString(); //"Fri Oct 28 2016 23:00:00 GMT-0400"
    // startTime.toString(); // "Fri Oct 28 2016 18:00:00 GMT-0400"
    console.log("startTime: " + (startTime));
    console.log("currentTime: " + currentTime);
    var msPerHour = 3600000;
    if (currentTime > startTime) {
        $("#8aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + msPerHour)) {
        $("#9aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour *2))) {
        $("#10aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour *3))) {
        $("#11aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour *4))) {
        $("#12pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour *5))) {
        $("#1pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour *6))) {
        $("#2aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour *7))) {
        $("#8aEvent").addClass("table-danger");
    }
}


colorBarClock();