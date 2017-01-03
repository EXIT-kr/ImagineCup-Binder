$(document).ready(function(){
  $("#topPanel").load("_includes/top.html");
  $("#leftPanel").load("_includes/left.html");
  $("#rightPanel").load("route/dashBoard.html");
  $("#bottomPanel").load("_includes/bottom.html");
  $('#calendar').fullCalendar({
    dayClick: function() {
        alert('a day has been clicked!');
    }
  });
})
