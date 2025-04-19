$(document).ready(function() {
  $('#timer').countdown('2025/09/12', function(event) {
      $(this).html(event.strftime('%H:%M:%S'));
  });
});