
$(document).ready(function(){
      $('body').prepend('<div class="container"></div>')
$( "#1" ).click(function(){
var width = prompt( "What size of grid would you like?" )
 if(width > 90){
    var width = prompt('Grid width must be 90 or less');
  }
  var height = prompt('Enter new grid height');
for (var i=0; i< height;i++){
    $('.container').append('<ul></ul>');
  }

  for (var i=0; i< width;i++){
    $('ul').append('<li></li>');
  }
$( "li" ).mouseover(function() {
    $(this).css('background-color', 'blue')
  });
});
$( "#2" ).click(function(){$(".container").empty()
                          })    
});
