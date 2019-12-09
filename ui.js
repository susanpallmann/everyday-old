//When page is ready, start event listeners
$(document).ready(function(){
  
  //Checks local storage to see if user has night mode enabled
  var nightMode = localStorage.getItem("nightmode");
  if (nightMode === "true") {
    $(document.body).addClass('night');
    $('#day-night-toggle').attr('aria-checked','true');
  } else {
    $(document.body).removeClass('night');
    $('#day-night-toggle').attr('aria-checked','false');
  }
  
  //Collapses accordions by default
  var accordionContent = [];
  $('.accordion-content').css('display', 'none');
  
  //Toggles day/night mode
  //When the user clicks on the day/night mode toggle
  $('#day-night-toggle').click(function () {
    var page = $(document.body);
    var dayNightToggle = $('#day-night-toggle');
    
    //If the page was not in night mode
    if (dayNightToggle.attr('aria-checked') === 'false') {
      
      //Activate night mode
      page.addClass('night');
      dayNightToggle.attr('aria-checked','true');
      localStorage.setItem("nightmode", "true");
    } else {
    
      //Otherwise, deactivate night mode
      page.removeClass('night');
      dayNightToggle.attr('aria-checked','false');
      localStorage.setItem("nightmode", "false");
    }
  });
  
  //Expands or collapses panels with this switch in them
  //When the user clicks on an expand/collapse toggle
  $('.expand-collapse').click(function () {
    var expandCollapse = $(this);
    var thisPanel = $(this).parent();
    
    //jQuery default slideToggle effect
    $(thisPanel).children('p').slideToggle( "fast" );
    
    //If it's already checked
    if (expandCollapse.attr('aria-checked') === 'true') {
      //Uncheck it, update the icon, expand text
      expandCollapse.attr('aria-checked','false');
      expandCollapse.html("remove_circle");
      $(thisPanel).children('p').removeClass('collapsed');
    } else {
      
      //If it is not checked, check it, update the icon, collapse text
      expandCollapse.attr('aria-checked','true');
      expandCollapse.html("add_circle");
      $(thisPanel).children('p').addClass('collapsed');
    }
  });
  
  //Accordion functionality, listens for click on head of a given segment
  $('div.accordion-head').click(function () {
    var accordionSegment = $(this);
    var accordionBlock = accordionSegment.parent();
    accordionBlock.children('.accordion-content').removeClass('script-display-none');
    
    //If it's already checked
    if (accordionSegment.attr('aria-checked') === 'true') {
      //Uncheck it, update the icon
      accordionSegment.attr('aria-checked','false');
      accordionSegment.children('i.carat-down').html("expand_more");
      accordionBlock.children('.accordion-content').removeClass('collapsed');      
    } else {
      
      //If not, check it, update the icon
      accordionSegment.attr('aria-checked','true');
      accordionSegment.children('i.carat-down').html("expand_less");
      accordionBlock.children('.accordion-content').addClass('collapsed');
      
    }
    //jQuery default slideToggle effect
    accordionBlock.children('.accordion-content').slideToggle( "fast" );
  });
  
  //Temporary system for having the calendar generate based on what day it is, probably will need rewritten once we have a database working, and overall I'm pretty sure we can find a more efficient way to do this (TODO)
  var today = new Date(); //Returns full date
  var currentDay = today.getDate(); //Returns 1-31
  var currentMonth = today.getMonth(); //Returns 0-11
  var currentYear = today.getFullYear(); //Returns year
  var nextMonth = getNextMonth(); //Calculates the next month and makes sure 0 comes after 11
  var nextMonthStart = new Date(currentYear, nextMonth, 1); //Returns the date of the first day of the next month
  var firstDay = new Date(currentYear, currentMonth, 1).getDay(); //Determines what day of the week the first day of the month is for plotting on the calendar later
  var numDays = firstDay + new Date(nextMonthStart - 1).getDate(); //Uses the first day of next month to work out how many days this month has by subtracting 1 from the date
  var todayModified = firstDay + currentDay; //Determines where the current day should be plotted on the calendar since the first day is technically offset
  
  //Assigns classes to the calendar to update the UI with the calculated information above
  $('.month').children('.day:nth-child(' + (firstDay + 1) + ')').addClass('first');
  $('.month').children('.day:nth-child(-n+' + firstDay + ')').addClass('ineligible');
  $('.month').children('.day:nth-child(' + numDays + ')').addClass('last');
  $('.month').children('.day:nth-child(n+' + (numDays + 1) + ')').addClass('ineligible');
  $('.month').children('.day:nth-child(' + todayModified + ')').addClass('today');
  
  //Listens for if the user clicks on any day on the calendar
  $('.day').click(function () {
    //Makes sure the day is eligible (i.e. not March 32)
    if ( $(this).hasClass('ineligible') ) {
    } else {
      //If day is eligible, UI "selects" the clicked day and clears any existing selection
      $('.day.selected').removeClass('selected');
      $(this).addClass('selected');
    }
  });
  
  //Listens for if the user clicks the week/month view toggle on the calendar
  $('.week-month').click(function () {
    var weekMonthOptions = [];
    weekMonthOptions = $('.week-month');
    
    //If the first option (in this case month view) is not already checked
    if ( $('.week-month:nth-child(1)').attr('aria-checked') === 'false' ) {
      
      //Change the calendar from using its .month styles to using .week styles
      $('.calendar').addClass('month').removeClass('week');
      
      //Mark first option as toggled and checked. Toggled is to update the icons visually, checked is what actually tells us if the option is "on" or "off"
      $('.week-month:nth-child(1)').addClass('toggled');
      $('.week-month:nth-child(1)').attr('aria-checked','true');
      
      //Mark second option as not toggled and not checked
      $('.week-month:nth-child(2)').removeClass('toggled');
      $('.week-month:nth-child(2)').attr('aria-checked','false');
    } else {
      
      //Change the calendar from using its .week styles to using .month styles
      $('.calendar').addClass('week').removeClass('month');
      
      //Mark first option as not toggled and not checked
      $('.week-month:nth-child(1)').removeClass('toggled');
      $('.week-month:nth-child(1)').attr('aria-checked','false');
      
      //Mark second option as toggled and checked
      $('.week-month:nth-child(2)').addClass('toggled');
      $('.week-month:nth-child(2)').attr('aria-checked','true');
    }
  });
});

//Calculates the next month on a 0-11 scale, if the current month is 11, starts the count over at 0. Probably a simpler way to do this too (TODO)
function getNextMonth(val) {
  var number = val; //current month number passed in when called
  var nextMonth;
  
  //If the current month is 11
  if (number = 11) {
    //Set next month to 0, effectively restarting the count
    nextMonth = 0;
  } else {
    
    
    //Otherwise increase the number by 1
    nextMonth = number ++;
  }
  return nextMonth; //Returns a number indicating what next month will be
}
