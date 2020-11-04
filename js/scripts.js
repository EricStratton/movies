
//Business Logic //

function Tickets (movieName, age, timeOfDay) {
    this.movieName = movieName;
    this.age = age;
    this.timeOfDay = timeOfDay;
}

Tickets.prototype.printReceipt = function () {
    return this.movieName + " " + this.age + " " + this.timeOfDay + this.price;
}


function add(inputtedMovieName, inputtedTimeOfDay) {
    return inputtedMovieName + inputtedTimeOfDay;
};

// User Interface Logic //

$(document).ready (function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    
const inputtedMovieName = parseInt($("#movieNames").val());
const inputtedAge = $("input[name='ageInput']:checked").val();
const inputtedTimeOfDay = parseInt($("#times").val());



let newMovieTicket = new Tickets(inputtedMovieName, inputtedAge, inputtedTimeOfDay);
let score = add(inputtedMovieName, inputtedTimeOfDay);

if (score <= 4 && inputtedAge === "grownfolk") {
  //$("#price1").show();
  $(".priceOutput").remove();
  $("#price").append("<p class='priceOutput'>Your ticket will cost $12!</p>");
} else if (score <=4 && inputtedAge === "ew") { 
  //$("#price2").show();
  $(".priceOutput").remove();
  $("#price").append("<p class='priceOutput'>Your ticket will cost $10!</p>");
} else if (score <= 4 && inputtedAge === "old") {
  //$("#price3").show();
  $(".priceOutput").remove();
  $("#price").append("<p class='priceOutput'>Your ticket will cost $8!</p>");
} else {
  //$("#price4").show();
  $(".priceOutput").remove();
  $("#price").append("<p class='priceOutput'>Your ticket will be FREE!</p>");
}

  }); 
});