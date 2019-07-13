var weekDayCalculator = function(cc, yy, mm, dd){
return (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
};


var dayandAkanname = function(genderOne, dayweekofBirth){
if (genderOne == "male" && dayweekofBirth == 2 ){
	return $("#output2").text("You were born on SUNDAY and your AKAN name is KWASI.");
}  if(genderOne == "male" && dayweekofBirth == 3 ) {
	return $("#output2").text("you were born on MONDAY and your AKAN name is KWADWO.");
}  if(genderOne == "male" && dayweekofBirth == 4 ) {
	return $("#output2").text("you were born on TUESDAY and your AKAN name is KWABENA.");
}  if(genderOne == "male" && dayweekofBirth == 5 ) {
	return $("#output2").text("you were born on WEDNESDAY and your AKAN name is KWAKU.");
}  if(genderOne == "male" && dayweekofBirth == 6) {
	return $("#output2").text("you were born on THURSDAY and your AKAN name is YAW.");
}  if(genderOne == "male" && dayweekofBirth == 7) {
	return $("#output2").text("you were born on FRIDAY and your AKAN name is KOFI.");
}  if(genderOne == "male" && dayweekofBirth == 1) {
	return $("#output2").text("you were born on SATURDAY and your AKAN name is KWAME.");
}  if(genderOne == "female" && dayweekofBirth == 2) {
	return $("#output2").text("you were born on SUNDAY and your AKAN name is AKOSUA.");
}  if(genderOne == "female" && dayweekofBirth == 3) {
	return $("#output2").text("you were born on MONDAY and your AKAN name is ADWOA.");
}  if(genderOne == "female" && dayweekofBirth == 4) {
	return $("#output2").text("you were born on TUESDAY and your AKAN name is ABENAA.");
}  if(genderOne == "female" && dayweekofBirth == 5) {
	return $("#output2").text("you were born on WEDNESDAY and your AKAN name is AKUA.");
}  if(genderOne == "female" && dayweekofBirth == 6) {
	return $("#output2").text("you were born on THURSDAY and your AKAN name is YAA.");
}  if(genderOne == "female" && dayweekofBirth == 7) {
	return $("#output2").text("you were born on FRIDAY and your AKAN name is AFUA.");
}  if(genderOne == "female" && dayweekofBirth == 1) {
	return $("#output2").text("you were born on SATURDAY and your AKAN name is AMA.");
} };

function validateData(dayofBirth, monthofBirth){
 if(dayofBirth <= 0 || dayofBirth > 31){
 alert ("INVALID DAY OF BIRTH PLEASE ENTER A NUMBER BETWEEN 1 AND 31");
 return;
 }
 if(monthofBirth <= 0 || monthofBirth > 12) {
 alert ("INVALID MONTH PLEASE ENTER A NUMBER BETWEEN 1 AND 12")
 return;
}};


$(document).ready(function() {
$("form#weekdayakan").submit(function(event) {
event.preventDefault();
var dayofBirth = parseInt($("#dayofBirth").val());
var monthofBirth = parseInt($("#monthofBirth").val());
var fullyearofBirth = parseInt($("#fullyearofBirth").val());
var centuryofBirth = parseInt($("#centuryofBirth").val());
var yearofBirth = parseInt($("#yearofBirth").val());
var gender = $("input:radio[name=gender]:checked").val();
validateData(dayofBirth, monthofBirth);
var resultOne = weekDayCalculator(centuryofBirth, yearofBirth, monthofBirth, dayofBirth);
var result = resultOne.toFixed();
$("#output").text("Date of Birth: " + dayofBirth + "/" +monthofBirth + "/" + fullyearofBirth + "." );
dayandAkanname(gender, result);
});
});
