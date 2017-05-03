//This functions builds a grid inside of the "sketch" container
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#sketch").append("<div class='grid'></div>");
    };
  };
  $(".grid").width(640/x);
  $(".grid").height(640/x);
};

$(document).ready(function() {
  createGrid(16);

});
