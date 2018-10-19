var totalYes = function(number1, number2) {
  return number1 + number2;
}
var yesProgrammer = function(totalYes) {
  if(answer >=3) {
    return true;
  }else{
    return false;
  }
}

S(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
    if (totalYes === "yesProgrammer") {
      $(".programmer").show();
      $(".no-go").hide();
    } else {
      $(".no-go").show();
      $(".programmer").hide();
    }
  });
});
