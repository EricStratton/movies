// User Interface logic
$(document).ready (function(event) {
  event.preventDefault();
  $("form#-").submit(function()) {

const inputtedMovieName = parseInt($("").val());
const inputtedAge = parseInt($("").val());
const inputtedTimeOfDay = parseInt($("").val());

let newMovieTicket = new Tickets(inputtedMovieName, inputtedAge, inputtedTimeOfDay);
let score = add(inputtedMovieName, inputtedAge, inputtedTimeOfDay);




//Business Logic
}
  function Tickets (movieName, age, timeOfDay) {
    this.movieName = movieName;
    this.age = age;
    this.timeOfDay = timeOfDay;
  }

  Tickets.prototype.printReceipt = function () {
    return this.movieName + " " + this.age + " " + this.timeOfDay + this.price;
  }


  function add(inputtedMovieName, inputtedAge, inputtedTimeOfDay) {
    return inputtedMovieName + inputtedAge + inputtedTimeOfDay;
  };



    // if (this.age < 18) {
    //   return 
    // } 
    // if (this.age >= 18 && this.age < 65) {
    //   return 
    // }
    // if (this.age >= 65) {

    // }
    // if (this.age >= 100) {

    // }