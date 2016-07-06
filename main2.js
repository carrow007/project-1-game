





document.addEventListener("DOMContentLoaded", function(){



  var board = document.getElementsByClassName('questions')[0];
  var choices = document.getElementsByClassName('answers')[0];
  var result = document.getElementsByClassName('result')[0];
  // var player1 = +prompt("Enter first player name");
  // var player2 = +prompt("Enter second player name"); // trying to add in 2 players and going to start here.
  //  alert(player1 + player2);
  // var playerOne = true;
  var current = 0;

    // trying out obj.key...
    // this object holds the questions and the answers. the obj.key should ennumerate over this to return the right answer in the array. when it hits the
    // number at the end of the array it will know which answer is a correct answer
      allQuestions = {
        'Who averaged one patent for every three days of his life?': ["Thomas Edision", "Benjamin Franklin", "Walt Disney", "Steve Jobs", 0],

        'How many parks does NYC have? This Includes playgrounds and recreational facilities?' : ["900", "500", "1700", "1300", 2],

        'What was the score of the USA vs. Agentina soccer match' : ["2-1 USA", "3-0 Argentina", "1-0 USA", "4-0 Argentina", 3],

        'How long did it take the Apollo missions to reach the Moon?' : ["3 days", "4 days", "1 day", "2 days", 0],

        'What is the smallest country in the world by population?' : ["Pitcairn Islands", "Monaco", "Vatican City", "Tokelau", 0],

        'When was MySpace created?' : ["2002", "2000", "2004", "2005", 2],

        'Which programming language does IMDb make major use of?' : ["Python", "Perl", "PHP", "Ruby", 1],

        'Which country has the longest coastline?' : ["USA", "Canada", "Russia", "Australia", 1],

        'When was Twitter Created?' : ["2005", "2007", "2008", "2006", 3],

        'What is the best selling video game of all time?' : ["Wii Sports", "Mincraft", "Tetris", "Super Mario Bros", 2],
      };

 // create button function..
   function createButton(){
// creating the element
    var button = document.createElement("button");
// putting the text node in the elemnet
    var buttonText =document.createTextNode("Play Again?");
// appending the text node to the button
    button.appendChild(buttonText);
// appending the button to the body of the document.
   document.body.appendChild(button);
// this event listener will respond to the click function...need to make a function to reset the game.
    button.addEventListener("click", function(){

    });

 }
 createButton(); // calls button

  var h1 = document.createElement("h1");  //using the DOM to creating the h1 tag

  var h1Cont = document.createTextNode("Trivia Game");

  h1.appendChild(h1Cont);  // appending the node to the tag

  document.body.appendChild(h1); //  appending the tag to the body


  function printQuestion(current) {// prints first question from the object to the game 'board'


    var question = Object.keys(allQuestions)[current]; //creating the variable questions going into the 'allquestions' then starting at the first array.

    board.innerHTML = question; //printing the question and answer set to the game board.
  }

  function printAnswers(current) {
  // this function will print the multiple choice answers and It grabs the needed answer-array with the help of the current-variable


    var answers = allQuestions[Object.keys(allQuestions)[current]]; //accessing the answers part of the object

    choices.innerHTML = ''; //resets the answers so that the previous answers dont bleed over

    for (var i = 0; i < answers.length -1; i += 1) { //loops through the answer array starting at the last spot
      var createDiv = document.createElement('div'); // creates a new div
        var text = document.createTextNode(answers[i]);

      createDiv.appendChild(text);//appending
      createDiv.addEventListener("click", checkAnswer(i, answers)); // Every answer is added with an 'click'-function
      choices.appendChild(createDiv); //appending
    }
  }

// checking to see if the answer is right or wrong
  function rightAnswer(clicked) {

    var createDiv = document.createElement('div');
    var currentQues = document.createTextNode(current + 1);// creating the next question var/textnode
    createDiv.appendChild(currentQues);
    if (clicked) {
      createDiv.className += 'right'; // creating a right div to keep tack of right guesses
      result.appendChild(createDiv);
    } else {
      createDiv.className += 'wrong';   // creating a wrong div to keep track of wrong answers
      result.appendChild(createDiv);
    }
  }
  function checkAnswer(theChoice, answerArray) { // This is the function that will run, when clicked on one of the answers and check if
                                                 // its right or wrong and check for last

    return function () {
      var givenAnswer = theChoice; //creating a variable for the users choice
       var correctAnswer = answerArray[answerArray.length - 1]; // the correct answer is located at the end of the array

      if (givenAnswer === correctAnswer) {   // checks for right or wrong answer
        rightAnswer(true);
      } else {
        rightAnswer(false);
      }

      if (current < Object.keys(allQuestions).length -1) { //loops though the object starting at the first one and going up one at a time
        current += 1;

        printQuestion(current); // printing the answers.
        printAnswers(current);
      } else {           // If it then print this.
        board.innerHTML = 'How did you do?!'; //final message
        choices.innerHTML = '';
      }
    }

  }


  printQuestion(current);
  printAnswers(current);

});









