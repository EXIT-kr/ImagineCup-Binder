$(function(){
  $("#leftPanel").load("_includes/left.html");
  // $("#rightPanel").load("route/chat.html");
  // $("#rightPanel").load("route/sprint.html");
  $("#rightPanel").load("route/dashBoard.html");
});

$(document).ready(function(){
  // $("#leftPanel").load("_includes/left.html");
  // $("#rightPanel").load("route/dashBoard.html");
  $('#calendar').fullCalendar({
    dayClick: function() {
        alert('a day has been clicked!');
    }
  });
})
