$(document).ready(function(){


  $("#topPanel").load("_includes/top.html");
  $("#leftPanel").load("_includes/left.html");
  // $("#rightPanel").load("route/chat.html");
  $("#rightPanel").load("route/sprint.html");
  $("#bottomPanel").load("_includes/bottom.html");
  $('#calendar').fullCalendar({
    dayClick: function() {
        alert('a day has been clicked!');
    }
  });

  $('#btn_dashBoard').click(function(){
      console.log("dashBoard");
      $("#rightPanel").load("route/dashBoard.html");
  })

  $('#btn_chat').click(function(){
    console.log("chat");
    $("#rightPanel").load("route/chat.html");
  })

  $('#btn_calendar').click(function(){
    console.log("carlendar");
    $("#rightPanel").load("route/sprint.html");
  })
})
