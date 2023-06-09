// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // This allows each save button on the right side to save information in local storage. 
  $(".saveBtn").click(function () {
    // The variable "hourID" gets the relevant id. The id is a parent to the save button. When viewing the local storage, if clicking on 6am, it will read hour-6. The split was added to make it display just 6. More information on what split does farther down. 
    var hourID = $(this).parent().attr("id").split("-")[1];
    // The variable "descriptionBox" is a sibling to the save button. 
    var descriptionBox = $(this).siblings(".description").val();
    // The button will save the content of the box to local storage, with the ID displayed. The "hourID" is the key, and the "descriptionBox" is the value.
    localStorage.setItem(hourID, descriptionBox);
  });


// Gets the current hour from DayJS, logs a number to the console from 0-23 based on current time. If you want to test the colors, change the hourNow to be equal to a number of your choice. For example, if you replace "dayjs().hour();" with 15, the page will color in as if it's 3:00PM.
var hourNow = dayjs().hour();
console.log(hourNow);

//Grabs all the "time block" hourly numbers on the left side and puts them into a list. The ".split("-")[1]" splits the data of "hour" and "number" into 2 values. Value 0 is the word "hour", whereas value 1 is the number, which is what we want. So the 1 isolates the number only within the id.

$(".time-block").each(function (){

  var hourSchedule = $(this).attr("id").split("-")[1]; 

//Removes all the colors, then adds back the correct color based on the time on the left.
// If the hour now is greater than the hour on the schedule, all colors will be removed, then the past class is added, making the box grey.
  if (hourNow > hourSchedule) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('past');
// If the hour now is equal to the hour on the schedule, all colors will be removed, then the present class is added, making the box red. Only 1 box on the page can be red.
  } else if (hourNow == hourSchedule) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('present');
// If the hour now is less than the hour on the schedule, all colors will be removed, then the future class is added, making the box green.
  } else if (hourNow < hourSchedule) {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('future');
  };

});

$(".saveBtn").click(function () {
  // The variable "hourID" gets the relevant id. The id is a parent to the save button. When viewing the local storage, if clicking on 6am, it will read hour-6. The split was added to make it display just 6. More information on what split does farther down. 
  var hourID = $(this).parent().attr("id").split("-")[1];
  // The variable "descriptionBox" is a sibling to the save button. 
  var descriptionBox = $(this).siblings(".description").val();
  // The button will save the content of the box to local storage, with the ID displayed. The "hourID" is the key, and the "descriptionBox" is the value.
  localStorage.setItem(hourID, descriptionBox);
});



  // When the page loads up, this will recall anything that was in local storage from before.
  $(".description").each(function () {
    // The variable "hourIDGet" gets the key from local storage. Because the split was stored, we should use the split again to get the item, or it doesn't work.
    var hourIDGet = localStorage.getItem($(this).parent().attr("id").split("-")[1]);
    // Now that we have the key, the value from descriptionBox can be displayed.
    $(this).val(hourIDGet);
  });




  // Today's date, which is used by the "currentDay" ID in the header of the HTML.

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
