//This functions builds a grid inside of the "sketch" container
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#sketch").append("<div class='grid'></div>");
    };
  };
  $(".grid").width(650/x);
  $(".grid").height(650/x);
};

//This creates an initial large sketch grid and colors over it when the mouse enters the grid insde #sketch
$(document).ready(function() {
  createGrid(50);

  $(".grid").mouseover(function() {
    $(this).css('background-color', 'black');
  });

//Controls the reset button
  $("#rButton").click(function() {
    $(".grid").css('background-color', 'silver');
  });

//Controls the Large grid button
  $("#lButton").click(function() {
    $(".grid").css('background-color', 'silver');
    createGrid(30);
  });

//Controls the Fine grid button
    $("#fButton").click(function() {
      $(".grid").css('background-color', 'silver');
      createGrid(50);
    });


});
