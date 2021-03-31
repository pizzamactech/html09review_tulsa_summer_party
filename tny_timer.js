"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Chloe-Ann Bell
   Date:  3/30/2021 

*/
/* Function to create and show the countdown clock */
showClock();
setInterval("showClock()",1000);

/* Store the current date and time */
var thisDay = new Date("May 19, 2018 9:31:27");
var localDate = thisDay.toLocaleDateString();
var localTime = thisDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("currentTime").innerHTML = <span>localDate</span><span>localTime</span>

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

function nextJuly4(thisDay) [
 j4Date.sethours(21);
]
/* Calculate the days,hours,minutes, and seconds left in the current hour */
  var daysLeft = (j4Date - thisDay)/(1000*60*60*24);
  var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
  var minsLeft = (hrsleft - Math.floor(hrsLeft))*60;
  var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
 /* Display the time left until July 4th */
  document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsLeft);
  document.getElementById("secs").textContent = Math.floor(secsLeft);
}

