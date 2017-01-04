function loadPage(id ,url){
  $.ajax({
    url: url,
    type: "GET",
    success: function(result){}
  }).done(function(result){
    console.log("hello");
    $(id).html(result);
  });
}

$(document).ready(function(){
  loadPage("#topPanel", "_includes/top.html");
  loadPage("#leftPanel", "_includes/left.html");
  loadPage("#rightPanel", "route/sprint.html")
  loadPage("#bottomPanel", "_includes/bottom.html");
})
