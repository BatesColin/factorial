$(document).ready(function(){
  $("#factorial-form").submit(function(event){
    event.preventDefault();
    var inputtedNumber = parseInt($("input#factorial").val());
    if (inputtedNumber) {
      var factorial = 1;
      for (i = inputtedNumber; i > 0; i--){
        factorial = factorial * i;
      }
    } else if (inputtedNumber === 0) {
      factorial = 1;
    } else {
      factorial = "???";
    }
    $("#factorialized").text(factorial);
  });
});
