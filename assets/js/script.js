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
    if (currentTime > startTime) {
        $("#8aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 3600000)) {
        $("#9aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 7200000)) {
        $("#10aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 10800000)) {
        $("#11aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 14400000)) {
        $("#12pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 18000000)) {
        $("#1pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 21600000)) {
        $("#2aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + 25200000)) {
        $("#8aEvent").addClass("table-danger");
    }
}


colorBarClock();