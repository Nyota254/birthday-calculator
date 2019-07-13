
var getData(){
    var dayofBirth = document.getElementById('dayofBirth')
    var monthofBirth = document.getElementById('monthofBirth')
    var yearofBirth = document.getElementById('yearofBirth')
    var centuryofBirth = yearofBirth.slice(0, 3);
    var year1ofBirth = yearofBirth.slice(3,5 );
    validate data(dateofBirth, monthofBirth)
    var result = weekdayCalculator(centuryofBirth, year1ofBirth, monthofBirth, dayofBirth);
alert(weekdayCalculator);
  };


var weekDayCalculator = function(cc, yy, mm, dd){
return (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
};


function dayandAkanname(){
if (gender === male && dayweekofBirth === sunday){
	alert("You were born on SUNDAY and your AKAN name is KWASI.")
} else if(gender === male && dayweekofBirth === monday) {
	alert("you were born on MONDAY and your AKAN name is KWADWO.")
} else if(gender === male && dayweekofBirth === tuesday) {
	alert("you were born on TUESDAY and your AKAN name is KWABENA.")
} else if(gender === male && dayweekofBirth === wednesday) {
	alert("you were born on WEDNESDAY and your AKAN name is KWAKU.")
} else if(gender === male && dayweekofBirth === thursday) {
	alert("you were born on THURSDAY and your AKAN name is YAW.")
} else if(gender === male && dayweekofBirth === friday) {
	alert("you were born on FRIDAY and your AKAN name is KOFI.")
} else if(gender === male && dayweekofBirth === sarturday) {
	alert("you were born on SATURDAY and your AKAN name is KWAME.")
} else if(gender === female && dayweekofBirth === sunday) {
	alert("you were born on SUNDAY and your AKAN name is AKOSUA.")
} else if(gender === female && dayweekofBirth === monday) {
	alert("you were born on MONDAY and your AKAN name is ADWOA.")
} else if(gender === female && dayweekofBirth === tuesday) {
	alert("you were born on TUESDAY and your AKAN name is ABENAA.")
} else if(gender === female && dayweekofBirth === wednesday) {
	alert("you were born on WEDNESDAY and your AKAN name is AKUA.")
} else if(gender === female && dayweekofBirth === thursday) {
	alert("you were born on THURSDAY and your AKAN name is YAA.")
} else if(gender === female && dayweekofBirth === friday) {
	alert("you were born on FRIDAY and your AKAN name is AFUA.")
} else if(gender === female && dayweekofBirth === saturday) {
	alert("you were born on SATURDAY and your AKAN name is AMA.")
} else{
  alert("INVALID ENTRY")
}}




function validateData(dayofBirth, monthofBirth){
 if(dayofBirth <= 0 || dayofBirth > 31){
 alert ("INVALID DAY OF BIRTH PLEASE ENTER A NUMBER BETWEEN 1 AND 31");
 return;
 }
 if(monthofBirth <= 0 || monthofBirth > 12) {
 alert ("INVALID MONTH PLEASE ENTER A NUMBER BETWEEN 1 AND 12")
 return;
 }
  if(gender === male && gender === female){
    alert("INVALID ENTRY ONLY ONE GENDER")
    return;
  }}
