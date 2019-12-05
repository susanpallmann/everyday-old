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
  var currentYear = today.getFullYear();
  var nextMonth = getNextMonth();
  var nextMonthStart = new Date(currentYear, nextMonth, 1);
  var firstDay = new Date(currentYear, currentMonth, 1).getDay();
  var numDays = firstDay + new Date(nextMonthStart - 1).getDate();
  var todayModified = firstDay + currentDay;
  
  $('.month').children('.day:nth-child(' + (firstDay + 1) + ')').addClass('first');
  $('.month').children('.day:nth-child(-n+' + firstDay + ')').addClass('ineligible');
  $('.month').children('.day:nth-child(' + numDays + ')').addClass('last');
  $('.month').children('.day:nth-child(n+' + (numDays + 1) + ')').addClass('ineligible');
  $('.month').children('.day:nth-child(' + todayModified + ')').addClass('today');
  
  $('.month .day').click(function () {
    if ( $(this).hasClass('ineligible') ) {
    } else {
      $('.month .day.selected').removeClass('selected');
      $(this).addClass('selected');
    }
  });
  $('.week-month').click(function () {
    var weekMonthOptions = $('.week-month');
    if ( $(this).attr('aria-checked') === 'false' ) {
      var i;
      for ( i=0; i < weekMonthOptions.length; i++ ) {
        weekMonthOptions[i].removeClass('toggled');
      }
      $(this).addClass('toggled');
    } else {
      var i;
      for ( i=0; i < weekMonthOptions.length; i++ ) {
        weekMonthOptions[i].addClass('toggled');
      }
      $(this).removeClass('toggled');
    }
  });
});
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
