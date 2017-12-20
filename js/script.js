//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

/* Returns a random integer between a and b, inclusive. */
function randomInt(a, b) {
  if (!(Number.isInteger(a) && Number.isInteger(b))) {
    throw "a and b must both be integers";
  } else if (b < a) {
    throw "b must be greater than or equal to a";
  }
  return a + Math.floor(Math.random() * (b+1-a));
}

function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random()*3);
    
    console.log(choices[index])
    return choices[index];
    
  }

function callme() {
  // write logic to pick rock, paper or scissors for player 2
  // determine winner
  // and display
  
  //pick
  var pick = getComputerChoice();
  alert(pick);
  document.getElementById("player2input1").textContent=pick;
}  
  

$(document).ready(function(){
  $("#rock").click(function() {
    console.log("the user picked rock!");
  });
  
  $("#paper").click(function() {
    console.log("the user picked paper!");
  });
  
  $("#scissors").click(function() {
    console.log("the user picked scissors!");
    var computerChoice = getComputerChoice();
    play("scissors", computerChoice);
    
    
  });
  
 
  
  function play (userChoice, computerChoice){
    if(userChoice == "scissors" && computerChoice=="scissors"){
      console.log("No winner")
    } else if (userChoice == "scissors" && computerChoice=="paper") {
      console.log("Winner")
    } else if (userChoice == "scissors" && computerChoice=="rock") {
      console.log("Computer wins!")
    }
  }




});
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES


//FUNCTIONS



// DOCUMENT READY FUNCTION

