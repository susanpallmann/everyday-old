$('#day-night-toggle').click(function dayNightToggle() {
  var page = $(html);
  if (page.hasClass('night') {
    page.removeClass('night');
    $('#day-mode').addClass('invisible');
    $('#night-mode').removeClass('invisible');
  } else {
    page.addClass('night');
    $('#day-mode').removeClass('invisible');
    $('#night-mode').addClass('invisible');
});
