# Work Day Scheduler
A simple calendar application that allows a user to save events for each hour of the day. Much of the HTML and CSS was provided, and the objective was to make the application function using the Javascript library jQuery and the library DayJS, which helped to display real times. 

## Table of Contents
- [Link](#link)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Development](#development)
- [Credits](#credits)

## Link

This is a link to the application.

https://tcunningham203.github.io/tim-work-day-scheduler/

## Screenshot

This is what the application looks like when you open it, as if the time is 9AM. When you actually open the application, the time will be accurate to your real time. This screenshot also features some placeholder scheduling notes, like meetings and reports.

![AppScreenshot1](/Assets/screenshots/website-screenshot1.png?raw=true "Screenshot of Deployed Application- Mock Schedule")

## Usage

When you load up the site, you are greeted with a header which displays the current day of the week, day, month, and year.

Depending on the time of day, the website will look different (as mentioned in the screenshot section.) However, generally there will be a red box indicating the current hour. Hours in the day that have been completed turn grey. Hours still left to go are green. If it's 6PM or later, the schedule will be entirely grey. If it's earlier than 6AM, the schedule will be entirely green. 

Click on a colored box to input information such as appointments, reminders, or tasks. Be sure to save the information you typed in by clicking the "save" icon on the right side of the box.

When you return to the page later, the information you saved will remain there. If you want to delete or change information, simply change the contents of the box, then save the box.

## Development

In this section, I'll briefly discuss some of the challenges and successes with the project, as well as goals for the future. 

This project was far easier than the previous project (the code quiz), because not only was most of the coding already done, but jQuery made things much easier than writing the code from scratch. As with the last project, I still have issues with local storage, but in the end, everything worked as intended and it took far less time than the previous project. The past/present/future coloring was the easiest part, the logic made perfect sense and lined up with the add/remove stuff I was doing with the quiz questions in the previous project.

Going forward, I could see adding multiple days to the schedule, instead of just 1 day. If you open the schedule the next day, all the old info would be there, but it would be nice to start a fresh page while keeping the old info on a previous page.


## Credits

I used the instructor lesson on DayJS (Week 5 Module 25) to learn how to display the date at the top. I also used the documentation from the DayJS Website.

I also used the jQuery documentation a lot, as well as Stack Overflow when certain things weren't working as I expected to see what I was doing wrong. However, I was able to complete everything required in the end.