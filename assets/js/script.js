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
    if (currentTime > (startTime + (msPerHour * 2))) {
        $("#10aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour * 3))) {
        $("#11aEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour * 4))) {
        $("#12pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour * 5))) {
        $("#1pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour * 6))) {
        $("#2pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour * 7))) {
        $("#3pEvent").addClass("table-danger");
    }
    if (currentTime > (startTime + (msPerHour * 8))) {
        $("#4pEvent").addClass("table-danger");
    }
}

colorBarClock();

$("#8aEntry").click(function () {
    var userEntry = prompt("What do you need to do at 8am?");
    $('#8aEntry').append(userEntry);
});

$("#9aEntry").click(function () {
    var userEntry = prompt("What do you need to do at 9am?");
    $('#9aEntry').append(userEntry);
});

$("#10aEntry").click(function () {
    var userEntry = prompt("What do you need to do at 10am?");
    $('#10aEntry').append(userEntry);
});

$("#11aEntry").click(function () {
    var userEntry = prompt("What do you need to do at 11am?");
    $('#11aEntry').append(userEntry);
});

$("#12pEntry").click(function () {
    var userEntry = prompt("What do you need to do at noon?");
    $('#12pEntry').append(userEntry);
});

$("#1pEntry").click(function () {
    var userEntry = prompt("What do you need to do at 1pm?");
    $('#1pEntry').append(userEntry);
});

$("#2pEntry").click(function () {
    var userEntry = prompt("What do you need to do at 2pm?");
    $('#2pEntry').append(userEntry);
});

$("#3pEntry").click(function () {
    var userEntry = prompt("What do you need to do at 3pm?");
    $('#3pEntry').append(userEntry);
});

$("#4pEntry").click(function () {
    var userEntry = prompt("What do you need to do at 4pm?");
    $('#4pEntry').append(userEntry);
});
