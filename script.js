"use strict";

const lengthArray = [];
var result;
var active;
var fromMonthValue;
var fromTimeValue;
var fromDateValue;
var fromYearValue;

var fromSecsValue;

/////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////

var countDownDate;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// var countDownDate = new Date("May 10, 2023 00:00:00").getTime();

const todayMonth = new Date().getMonth();
const todayDate = new Date().getDate();
const todayYear = new Date().getFullYear();
const todayMinutes = new Date().getMinutes();
const inputBox = document.querySelector(".units-option");

////////////////////////////////////////////////////////////////
var myfunc;
var buttonSetEl = document.querySelector(".btn--set");
buttonSetEl.addEventListener("click", function (e) {
  e.preventDefault();

  fromTimeValue = document.getElementById("from-value--time").value;
  fromDateValue = document.getElementById("from-value--date").value;
  fromMonthValue = document.getElementById("from-value--month").value;
  fromYearValue = document.getElementById("from-value--year").value;

  inputBox.classList.add("option--inactive");

  var countDownDate = new Date(
    `${fromMonthValue} ${fromDateValue}, ${fromYearValue} ${fromTimeValue}`
  );

  myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, "0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").innerHTML = String(seconds).padStart(
      2,
      "0"
    );

    if (timeleft < 0) {
      alert("Timer Over!⏱️");
      clearInterval(myfunc);
      document.getElementById("days").innerHTML = "";
      document.getElementById("hours").innerHTML = "";
      document.getElementById("minutes").innerHTML = "";
      document.getElementById("seconds").innerHTML = "";
    }
  }, 1000);
});

let timerResetBtn = document.querySelector(".button--reset--timer");

timerResetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("H!!!!!!!!!!!!!!");

  clearInterval(myfunc);
  document.getElementById("days").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
});

//////////////////////////////////////////////////////
// Making navigation buttons work
//////////////////////////////////////////////////////

// Selecting buttons
let timerBtn = document.querySelector(".button--timer");
let stopwatchBtn = document.querySelector(".button--stopwatch");

// Selecting sections
let timerOption = document.querySelector(".option--timer");
let stopwatchOption = document.querySelector(".option--stopwatch");

timerBtn.addEventListener("click", function () {
  timerOption.classList.remove("option--inactive");
  stopwatchOption.classList.add("option--inactive");

  active = 0;
});

/////////////////////////////////////////////////////
// STOPWATCH SECTION
/////////////////////////////////////////////////////

var secsSW = 0;
var minsSW = 0;
var hrsSW = 0;

const resultEl = document.querySelector("face--timer");
const optionEl = document.querySelector("option");
const startBtn = document.querySelector(".button--start");
const resetBtnSW = document.querySelector(".button--reset--stopwatch");

stopwatchBtn.addEventListener("click", function () {
  timerOption.classList.add("option--inactive");
  stopwatchOption.classList.remove("option--inactive");
  active = 1;
});

var myInterval;

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  myInterval = setInterval(function () {
    secsSW += 1;
    if (secsSW > 59) {
      secsSW = 0;
      minsSW++;
    }
    if (minsSW > 59) {
      minsSW = 0;
      hrsSW++;
    }

    document.getElementById("hours--sw").innerHTML = String(hrsSW).padStart(
      2,
      "0"
    );
    document.getElementById("minutes--sw").innerHTML = String(minsSW).padStart(
      2,
      "0"
    );
    document.getElementById("seconds--sw").innerHTML = String(secsSW).padStart(
      2,
      "0"
    );
  }, 1000);
});

resetBtnSW.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Helloooooo");
  clearInterval(myInterval);
  hrsSW = 0;
  minsSW = 0;
  secsSW = 0;

  document.getElementById("hours--sw").innerHTML = String(hrsSW).padStart(
    2,
    "0"
  );
  document.getElementById("minutes--sw").innerHTML = String(minsSW).padStart(
    2,
    "0"
  );
  document.getElementById("seconds--sw").innerHTML = String(secsSW).padStart(
    2,
    "0"
  );
});

// MADE BY: Siddharth Verma
