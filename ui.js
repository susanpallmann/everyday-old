$(document).ready(function(){
  $('#day-night-toggle').click(function () {
    console.log("clicked me!");
    var page = $(html);
    var dayNightToggle = $('#day-night-toggle');
    if (dayNightToggle.getAttribute('aria-checked') === 'false') {
      page.addClass('night');
      dayNightToggle.setAttribute('aria-checked') === 'true');
      $('#day-mode').addClass('invisible');
      $('#night-mode').removeClass('invisible');
    } else {
      page.removeClass('night');
      dayNightToggle.setAttribute('aria-checked') === 'false');
      $('#day-mode').removeClass('invisible');
      $('#night-mode').addClass('invisible');
    }
  });
});
