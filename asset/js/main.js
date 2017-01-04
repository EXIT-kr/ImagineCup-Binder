function loadPage(id ,url){
  $.ajax({
    url: url,
    type: "GET",
    success: function(result){}
  }).done(function(result){
    $(id).html(result);
  });
}

$(document).ready(function(){

  loadPage("#leftPanel", "_includes/left.html");
  loadPage("#rightPanel", "route/sprint.html")
  loadPage("#topPanel", "_includes/top.html");
  loadPage("#bottomPanel", "_includes/bottom.html");

})
