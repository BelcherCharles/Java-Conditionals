var likesToTravel = true;
if (likesToTravel === true){
    console.log("Bon Voyage!");
}   else {
    console.log("Enjoy your couch!");
}

var favoriteFood = "Indian Buffet";
if (favoriteFood === "fried pickles"){
    console.log("You have great taste!");
}   else {
    console.log("That's pretty awesome also.");
}

if (1+1 > 5){
    console.log("True fact!");
}   else {
    console.log("Lies!")
}
if (4*5 >= 20){
    console.log("True Fact!");
}   else {
    console.log("Lies!")
}
if (6/2 >= 0){
    console.log("True Fact!");
}   else {
    console.log("Lies!")
}

var hypoPerson = {
    Name: "Michael Scott",
    prefLanguage: "Gibberish"
}     

if (hypoPerson.prefLanguage === "English"){
    var greeting = document.querySelector ("#personal-greeting");
    greeting.innerHTML = "Hello!" + " " + hypoPerson.Name;
}   if (hypoPerson.prefLanguage === "French"){
    var greeting = document.querySelector ("#personal-greeting");
    greeting.innerHTML = "Bonjour!" + " " + hypoPerson.Name;
}   if (hypoPerson.prefLanguage === "Gibberish"){
    var greeting = document.querySelector ("#personal-greeting");
    greeting.innerHTML = ("I likea do tha Cha Cha...," + " " + hypoPerson.Name);
}

var time = "1:00pm";
var isHungry = true;


if (time === "7:30am" && isHungry === true){
console.log("Time for breakfast!");
}   if (time === "12:00pm" && isHungry === true){
console.log("Time for lunch!");
}   if (time === "7:00pm" || "8:00pm" && isHungry === true){
console.log("Time for dinner!");
}   if (isHungry === true) {
console.log("Have a snack!");
}   if (isHungry !== true) {
    console.log("Have a cookie anyway!");
}

var grade = 98;

if (grade >=0 && grade <= 69){
    console.log("You get an F...");
}   if (grade >= 70 && grade <= 76){
    console.log("You get a D.");
}   if (grade >= 77 && grade <= 83){
    console.log("You get a C.")
}   if (grade >= 84 && grade <= 92){
    console.log("You get a B.");
}   if (grade >= 93 && grade <= 100){
    console.log("You got an A. Good job!");
}
