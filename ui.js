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
    if (expandCollapse.attr('aria-checked') === 'true') {
      expandCollapse.attr('aria-checked','false');
      $(thisPanel).children('p').removeClass('collapsed');
      expandCollapse.html("remove_circle");
    } else {
      expandCollapse.attr('aria-checked','true');
      $(thisPanel).children('p').addClass('collapsed');
      expandCollapse.html("add_circle");
    }
  });
});
