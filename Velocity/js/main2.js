var $down = $("#go-down");
var $up = $("#go-up");

$down.on("click", function() {
  $up.velocity("scroll", { 
    duration: 2000,
    easing: "easeInBack"
  });
});

$up.on("click", function() {
  $("body").velocity("scroll", { 
    duration: 2000,
    easing: "easeInBack"
  });
});