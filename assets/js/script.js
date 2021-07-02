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

// Local Storage recovery
$("#8aEntry").text(function () {
    var mem8a = localStorage.getItem("#8aEntry");
    console.log("mem8a :" + mem8a);
    $('#8aEntry').text(mem8a);
})

$("#9aEntry").text(function () {
    var mem9a = localStorage.getItem("#9aEntry");
    $('#9aEntry').text(mem9a);
})

$("#10aEntry").text(function () {
    var mem10a = localStorage.getItem("#10aEntry");
    $('#10aEntry').text(mem10a);
})

$("#11aEntry").text(function () {
    var mem11a = localStorage.getItem("#11aEntry");
    $('#11aEntry').text(mem11a);
})

$("#12pEntry").text(function () {
    var mem12p = localStorage.getItem("#12pEntry");
    $('#12pEntry').text(mem12p);
})

$("#1pEntry").text(function () {
    var mem1p = localStorage.getItem("#1pEntry");
    $('#1pEntry').text(mem1p);
})

$("#2pEntry").text(function () {
    var mem2p = localStorage.getItem("#2pEntry");
    $('#2pEntry').text(mem2p);
})

$("#3pEntry").text(function () {
    var mem3p = localStorage.getItem("#3pEntry");
    $('#3pEntry').text(mem3p);
})

$("#4pEntry").text(function () {
    var mem4p = localStorage.getItem("#4pEntry");
    $('#4pEntry').text(mem4p);
})

// Mouse click event listeners to record event entry
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

// Delete buttons
$("#8aDelete").click(function () {
    $('#8aEntry').text("");
});

$("#9aDelete").click(function () {
    $('#9aEntry').text("");
});

$("#10aDelete").click(function () {
    $('#10aEntry').text("");
});

$("#11aDelete").click(function () {
    $('#11aEntry').text("");
});

$("#12pDelete").click(function () {
    $('#12pEntry').text("");
});

$("#1pDelete").click(function () {
    $('#1pEntry').text("");
});

$("#2pDelete").click(function () {
    $('#2pEntry').text("");
});

$("#3pDelete").click(function () {
    $('#3pEntry').text("");
});

$("#4pDelete").click(function () {
    $('#4pEntry').text("");
});

// Event local storage
$("#8aSave").click(function () {
    var value8a = $( "#8aEntry" ).text();
    console.log("value8a: " + value8a);
    localStorage.setItem("#8aEntry" , value8a);
});

$("#9aSave").click(function () {
    var value9a = $( "#9aEntry" ).text();
    console.log("value9a: " + value9a);
    localStorage.setItem("#9aEntry" , value9a);
});

$("#10aSave").click(function () {
    var value10a = $( "#10aEntry" ).text();
    console.log("value10a: " + value10a);
    localStorage.setItem("#10aEntry" , value10a);
});

$("#11aSave").click(function () {
    var value11a = $( "#11aEntry" ).text();
    console.log("value11a: " + value11a);
    localStorage.setItem("#11aEntry" , value11a);
});

$("#12pSave").click(function () {
    var value12p = $( "#12pEntry" ).text();
    console.log("value12p: " + value12p);
    localStorage.setItem("#12pEntry" , value12p);
});

$("#1pSave").click(function () {
    var value1p = $( "#1pEntry" ).text();
    console.log("value1p: " + value1p);
    localStorage.setItem("#1pEntry" , value1p);
});

$("#2pSave").click(function () {
    var value2p = $( "#2pEntry" ).text();
    console.log("value2p: " + value2p);
    localStorage.setItem("#2pEntry" , value2p);
});

$("#3pSave").click(function () {
    var value3p = $( "#3pEntry" ).text();
    console.log("value3p: " + value3p);
    localStorage.setItem("#3pEntry" , value3p);
});

$("#4pSave").click(function () {
    var value4p = $( "#4pEntry" ).text();
    console.log("value4p: " + value4p);
    localStorage.setItem("#4pEntry" , value4p);
});
