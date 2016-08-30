//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts

var guests;
var donuts;
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.

guests = prompt("enter number of guests");
donuts = prompt("enter number of donuts");

//use parseInt to convert the users answer from a string to an integer.

guests = parseInt(guests);
donuts = parseInt(donuts);

//write a conditional to check if there are enough donuts

if (guests < donuts) {
  alert("there are " + donuts + " , enough for everyone!")
} else {
  alert("there are " + donuts + " , not enough for everyone :(")
}

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
