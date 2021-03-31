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
  return j4Date
]
