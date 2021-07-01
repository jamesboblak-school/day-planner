// var updateTime = function () {
//     var currentTime = moment().format('h:mm:ss')
//     $("#date-time").text(currentTime)
//     console.log("the time is: " + currentTime);
// }
// updateTime();

// var dateTimeEl = document.querySelector(".currentDay");

// dateTimeEl = moment().format("MMM Do, YYYY", "hh:mm:ss");

// function setTime() {
//   var timerCount = setInterval(function () {}, 1000);
// }

// setTime();

var updateTime = function () {
    var currentTime = moment().format("h:mm:ss, MMM Do, YYYY", "hh:mm:ss")
    $("#currentDay").text(currentTime)
}
updateTime();
setInterval(updateTime, 1000);


