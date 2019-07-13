var weekDayCalculator = function(cc, yy, mm, dd){
return (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
};

$(document).ready(function() {
$("form#weekdayakan").submit(function(event) {
event.preventDefault();
var dayofBirth = parseInt($("#dayofBirth").val());
var monthofBirth = parseInt($("#monthofBirth").val());
var fullyearofBirth = parseInt($("#fullyearofBirth").val());
var centuryofBirth = parseInt($("#centuryofBirth").val());
var yearofBirth = parseInt($("#yearofBirth").val());
var gender = parseInt($("#gender").val());
var result = weekDayCalculator(centuryofBirth, yearofBirth, monthofBirth, dayofBirth);
$("#output").text(result);
});
});
