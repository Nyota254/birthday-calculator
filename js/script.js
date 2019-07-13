var weekDayCalculator = function(cc, yy, mm, dd){
return (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
};


function dayandAkanname(gender, dayweekofBirth){
if (gender === "male" && dayweekofBirth === 2 ){
	var name = "You were born on SUNDAY and your AKAN name is KWASI."
} else if(gender === "male" && dayweekofBirth === 3 ) {
	var name = "you were born on MONDAY and your AKAN name is KWADWO."
} else if(gender === "male" && dayweekofBirth === 4 ) {
	var name = "you were born on TUESDAY and your AKAN name is KWABENA."
} else if(gender === "male" && dayweekofBirth === 5 ) {
	var name = "you were born on WEDNESDAY and your AKAN name is KWAKU."
} else if(gender === "male" && dayweekofBirth === 6) {
	var name = "you were born on THURSDAY and your AKAN name is YAW."
} else if(gender === "male" && dayweekofBirth === 7) {
	var name = "you were born on FRIDAY and your AKAN name is KOFI."
} else if(gender === "male" && dayweekofBirth === 1) {
	var name = "you were born on SATURDAY and your AKAN name is KWAME."
} else if(gender === "female" && dayweekofBirth === 2) {
	var name = "you were born on SUNDAY and your AKAN name is AKOSUA."
} else if(gender === "female" && dayweekofBirth === 3) {
	var name = "you were born on MONDAY and your AKAN name is ADWOA."
} else if(gender === "female" && dayweekofBirth === 4) {
	var name = "you were born on TUESDAY and your AKAN name is ABENAA."
} else if(gender === "female" && dayweekofBirth === 5) {
	var name = "you were born on WEDNESDAY and your AKAN name is AKUA."
} else if(gender === "female" && dayweekofBirth === 6) {
	var name = "you were born on THURSDAY and your AKAN name is YAA."
} else if(gender === "female" && dayweekofBirth === 7) {
	var name = "you were born on FRIDAY and your AKAN name is AFUA."
} else if(gender === "female" && dayweekofBirth === 1) {
	var name = "you were born on SATURDAY and your AKAN name is AMA."
} else{
  var name = "INVALID ENTRY"
}}


$(document).ready(function() {
$("form#weekdayakan").submit(function(event) {
event.preventDefault();
var dayofBirth = parseInt($("#dayofBirth").val());
var monthofBirth = parseInt($("#monthofBirth").val());
var fullyearofBirth = parseInt($("#fullyearofBirth").val());
var centuryofBirth = parseInt($("#centuryofBirth").val());
var yearofBirth = parseInt($("#yearofBirth").val());
var gender = $("#gender").val();
var resultOne = weekDayCalculator(centuryofBirth, yearofBirth, monthofBirth, dayofBirth);
var result = resultOne.toFixed();
var resultsTwo = dayandAkanname(gender, result);
$("#output").text(result);
$("#output").text(name);

});
});
