$( "#click" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#hide" ).click(function() {
  $( "#byeBye" ).hide( "slow");
});

$( "#show" ).click(function() {
  $( "#helloThere" ).show( "slow");
});

$( "#slide" ).click(function() {
  $( ".slideaway" ).slideToggle("slow");
});

$( "#slideUp" ).click(function() {
  $( ".slide" ).slideUp("slow");
});

$( "#down" ).click(function() {
  $( "#goDown" ).slideDown("5000", function(){ 
      alert('Command executed');
  });
});

$( "#fadein" ).click(function() {
  $( ".comeIn" ).fadeIn("slow");
});

$( "#fadeout" ).click(function() {
  $( ".goingOUt" ).fadeOut("slow");
});

$( "#add" ).click(function() {
  $( "body" ).addClass( "wrapper");
});

$( "#before" ).click(function() {
  $( ".backOne" ).before( "hello there");
});

$( "#after" ).click(function() {
  $( ".next" ).after( "Goodbye now");
});

$( "#append" ).click(function() {
  $( ".twoTitle" ).append( "<h3>Wait a minute!</h3>");
});

$( "#html" ).click(function() {
  $( ".node" ).html();
});

$( "#attr" ).click(function() {
  $( ".target" ).attr('value');
});

$( "#val" ).click(function() {
  $( ".typeTitle" ).val();
});

$( "#text" ).click(function() {
  $( ".typeTitle" ).text();
});

$( "#toggle" ).click(function() {
  $( ".move" ).toggle("slow");
});



