var Country = getColumn("COVID-19 Cases per Country", "Country");

//These onEvents explain what will happen when you click or chance something. 
onEvent("highestButton","click", function() {
  setScreen("highestScreen");
});
onEvent("lowestButton","click", function() {
  setScreen("lowestScreen");
});
onEvent("highestDropdown","change", function(){
  findHighest();
});
onEvent("lowestDropdown","change", function(){
  findLowest();
});
onEvent("backHomeIcon1", "click", function( ) {
  setScreen("startScreen");
});
onEvent("backHomeIcon2", "click", function( ) {
  setScreen("startScreen");
});
//Prints the country with the highest numbers in any of the chosen categories. 
function findHighest() {
 var input = getText("highestDropdown");
 var category  = getColumn("COVID-19 Cases per Country", input);
 var max =  0;
 var highestName;
 for(var i = 0; i < category.length; i++){
   if(category[i] > max) {
     max = category[i];
     highestName = Country[i];
   }
 }
 setText("highestOutput", ("The country with the highest " + input) + " is " + highestName + ".");
}

//Prints the country with the lowest numbers in any of the chosen categories. 
function findLowest() {
 var input = getText("lowestDropdown");
 var category  = getColumn("COVID-19 Cases per Country", input);
 var lowest =  1000;
 var lowestName;
 for(var i = 0; i < category.length; i++){
   if(category[i] < lowest) {
     lowest = category[i];
     lowestName = Country[i];
   }
 }
 setText("lowestOutput", ("The country with the lowest " + input) + " is " + lowestName + ".");
}


