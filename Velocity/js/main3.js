var $div = $("#with-velocity");
var $text = $div.find('.text');
var $icon = $div.find('.icon');

function withVelocity() {
  $div.velocity({
    borderRadius: "25px",
    width: "45px",
    paddingLeft: "0",
    paddingRight: "0",
    backgroundColor: "#8CC152",
    color: "#fff",
    borderColor: "#8CC152",
    boxShadowX: "0",
    boxShadowY: "0"
  }, {
    duration: 350, 
    easing: "easeInQuad"
  });
  
  $text.velocity({
    scale: 0,
    opacity: 0
  }, {
    duration: 150, 
    easing: "easeInQuad"
  });
  
  $icon.velocity({
    opacity: 1
  }, {
    delay: 350,
    duration: 150, 
    easing: "easeInQuad"
  });
}

$("#play-velocity").on('click', function(){
  withVelocity();
});