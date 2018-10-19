var totalYes = function(number1, number1) {
  return number1 + number1;
}
var totalNo =function(number2, number2) {
  return number2 + number2;
debugger;
}
var yesProgrammer = function(totalYes) {
  if(answer >=2) {
    return true;
  }else{
    return false;
  }
}
var NoProgrammer = function(totalNo) {
    if(answer >=2) {
      return true;
    }else{
      return false;
    }
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
    if (totalYes === "yesProgrammer") {
      $("#programmer").show();
      $("#no-go").hide();
    } else {
      $("#no-go").show();
      $("#programmer").hide();
    }
  });
});
