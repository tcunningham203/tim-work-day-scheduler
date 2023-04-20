// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?





// Gets the current hour from DayJS, logs a number to the console from 0-23 based on current time
var hourNow = dayjs().hour();
console.log(hourNow);

//Grabs all the "time block" hourly numbers on the left side and puts them into a list.

$(".time-block").each(function (){

  var hourSchedule = $(this).attr("id").split("-")[1]; 

//Removes all the colors, then adds back the correct color based on the time on the left.

  if (hourNow < hourSchedule) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('past');
  } else if (hourNow == hourSchedule) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('present');
  } else if (hourNow > hourSchedule) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('future');
  };

});




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  

  // Today's date, which is used by the "currentDay" ID in the header of the HTML.

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
