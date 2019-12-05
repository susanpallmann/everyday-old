$(document).ready(function(){
  $('#day-night-toggle').click(function () {
    console.log("clicked me!");
    var page = $(document.body);
    var dayNightToggle = $('#day-night-toggle');
    if (dayNightToggle.attr('aria-checked') === 'false') {
      page.addClass('night');
      dayNightToggle.attr('aria-checked','true');
      $('#day-mode').css('display', 'none');
      $('#night-mode').css('display', 'inline-block');
    } else {
      page.removeClass('night');
      dayNightToggle.attr('aria-checked','false');
      $('#day-mode').css('display', 'inline-block');
      $('#night-mode').css('display', 'none');
    }
  });
  $('.expand-collapse').click(function () {
    var expandCollapse = $(this);
    var thisPanel = $(this).parent();
    $(thisPanel).children('p').slideToggle( "fast" );
    if (expandCollapse.attr('aria-checked') === 'true') {
      expandCollapse.attr('aria-checked','false');
      expandCollapse.html("remove_circle");
      $(thisPanel).children('p').removeClass('collapsed');
    } else {
      expandCollapse.attr('aria-checked','true');
      expandCollapse.html("add_circle");
      $(thisPanel).children('p').addClass('collapsed');
    }
  });
  var today = new Date();
  var currentDay = today.getDate();
  var currentMonth = today.getMonth();
  var nextMonth = getNextMonth();
  var currentYear = today.getFullYear();
  var monthString = monthToString(currentMonth);
  var nextMonthStart = new Date(currentYear, nextMonth,1);
  var firstDay = new Date(currentYear, currentMonth, 1);
  var firstWeekday = firstDay.getDay() + 1;
  var numDays = new Date(nextMonthStart - 1) + firstWeekday;
  var month = $('.month');
  month.children('.day:nth-child(' + numDays + ')').css('background-color','#40C8C2');
});
  function monthToString(val) {
    var number = val;
    var allMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthString = allMonths[number];
    return monthString;
  }
function getNextMonth(val) {
  var number = val;
  var nextMonth;
  if (number = 11) {
    nextMonth = 0;
  } else {
    nextMonth = number ++;
  }
  return nextMonth;
}
