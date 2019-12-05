$(document).ready(function(){
  $('#day-night-toggle').click(function () {
    console.log("clicked me!");
    var page = $(document);
    var dayNightToggle = $('#day-night-toggle');
    if (dayNightToggle.attr('aria-checked') === 'false') {
      page.addClass('night');
      dayNightToggle.attr('aria-checked','true');
      $('#day-mode').addClass('invisible');
      $('#night-mode').removeClass('invisible');
    } else {
      page.removeClass('night');
      dayNightToggle.attr('aria-checked','false');
      $('#day-mode').removeClass('invisible');
      $('#night-mode').addClass('invisible');
    }
  });
});
