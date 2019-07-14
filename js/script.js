var weekDayCalculator = function(cc, yy, mm, dd){
return (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
};


var dayandAkanname = function(genderOne, dayweekofBirth){
				if (genderOne == "male" && dayweekofBirth == 2 ){
	return $("#output2").text("You were born on SUNDAY and your AKAN name is KWASI.");
}  else if(genderOne == "male" && dayweekofBirth == 3 ) {
	return $("#output2").text("you were born on MONDAY and your AKAN name is KWADWO.");
}  else if(genderOne == "male" && dayweekofBirth == 4 ) {
	return $("#output2").text("you were born on TUESDAY and your AKAN name is KWABENA.");
}  else if(genderOne == "male" && dayweekofBirth == 5 ) {
	return $("#output2").text("you were born on WEDNESDAY and your AKAN name is KWAKU.");
}  else if(genderOne == "male" && dayweekofBirth == 6) {
	return $("#output2").text("you were born on THURSDAY and your AKAN name is YAW.");
}  else if(genderOne == "male" && dayweekofBirth == 7) {
	return $("#output2").text("you were born on FRIDAY and your AKAN name is KOFI.");
}  else if(genderOne == "male" && dayweekofBirth == 1) {
	return $("#output2").text("you were born on SATURDAY and your AKAN name is KWAME.");
}  else if(genderOne == "female" && dayweekofBirth == 2) {
	return $("#output2").text("you were born on SUNDAY and your AKAN name is AKOSUA.");
}  else if(genderOne == "female" && dayweekofBirth == 3) {
	return $("#output2").text("you were born on MONDAY and your AKAN name is ADWOA.");
}  else if(genderOne == "female" && dayweekofBirth == 4) {
	return $("#output2").text("you were born on TUESDAY and your AKAN name is ABENAA.");
}  else if(genderOne == "female" && dayweekofBirth == 5) {
	return $("#output2").text("you were born on WEDNESDAY and your AKAN name is AKUA.");
}  else if(genderOne == "female" && dayweekofBirth == 6) {
	return $("#output2").text("you were born on THURSDAY and your AKAN name is YAA.");
}  else if(genderOne == "female" && dayweekofBirth == 7) {
	return $("#output2").text("you were born on FRIDAY and your AKAN name is AFUA.");
}  else if(genderOne == "female" && dayweekofBirth == 1) {
	return $("#output2").text("you were born on SATURDAY and your AKAN name is AMA.");
}	 else {
	return $("#output2").text("ERROR: " +"   " + "1.ENSURE ALL VALUES ARE FILLED." + "   " + "2.ENSURE ALL VALUES ARE CORRECTLY FILLED");
}};

function validateData(dayofBirth, monthofBirth){
	if(dayofBirth <= 0 || dayofBirth > 31){
 return alert ("INVALID DAY OF BIRTH PLEASE ENTER A NUMBER BETWEEN 1 AND 31");
 }
 if(monthofBirth <= 0 || monthofBirth > 12) {
 return alert ("INVALID MONTH PLEASE ENTER A NUMBER BETWEEN 1 AND 12");
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
