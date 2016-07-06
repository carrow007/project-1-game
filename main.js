



document.addEventListener("DOMContentLoaded", function(){


var playerOne = true;
var playerTwo = false;
var row = 6;
var column = 6;
var pieces = []
// var fullBoard = [];

// In order: USA, Paraguay, Uruguay, West Australia, Persia, France, Ukraine, Chinese Empire, Brazil, Kingdom of Romania,
// Kingdom of Norway, Siam, Japanese Empire, Kingdom of Italy, Russian Empire, Timor, Denmark, Chile.
var fullBoard = ["http://i.imgur.com/YKzCeGb.jpg?1", "http://i.imgur.com/EToBKvP.jpg?1", "http://i.imgur.com/S2w5qB4.jpg?1",
"http://i.imgur.com/pZJ45Zo.jpg?1", "http://i.imgur.com/btPfvgE.jpg?1", "http://i.imgur.com/wgEiBui.jpg?1", "http://i.imgur.com/7einjUS.jpg?1",
"http://i.imgur.com/bBtFWxU.jpg?1", "http://i.imgur.com/JD8RrsY.jpg?1", "http://i.imgur.com/CXaNJ8z.jpg?1", "http://i.imgur.com/D9pf3gd.jpg?1",
"http://i.imgur.com/JHDRuQI.jpg?1", "http://i.imgur.com/qkr392X.jpg?1", "http://i.imgur.com/j56Zor1.jpg?1", "http://i.imgur.com/Rey4ryX.jpg?1",
"http://i.imgur.com/zYnE1to.jpg?1", "http://i.imgur.com/KLygLjX.jpg?1", "http://i.imgur.com/Guch6ja.jpg?1"]



var title = document.createElement("h1")
var titleText = document.createTextNode("Memory Game")
title.appendChild(titleText)
document.body.appendChild(title)


var gameBoard = document.createElement("table"); //creating the gameboard

 for(var i = 1; i <=row; i++){        //  loops through the table to create the rows
   var tr = document.createElement("tr");
   tr.setAttribute("id", "rowId");
   for(var j = 1; j <=column; j++){   // loops through the table to create the columns

     var td = document.createElement("td");
     td.setAttribute("id", "columnId");
     var tdCont = document.createTextNode("");
     td.appendChild(tdCont);
     tr.appendChild(td);
     gameBoard.appendChild(tr);       // appending the rows + columns + content of each.
   }
 }

 document.body.appendChild(gameBoard); // puts on the body of the html.


// // fucntion MatchingSquares() {    // try this approach later...

//   fullBoard.push(this.getAttribute(td));
//   console.log(this.getAttribute(td));


// }









function createButton(){
   var button = document.createElement("button");
   var buttonText =document.createTextNode("Play Again?");
   button.appendChild(buttonText);
   document.body.appendChild(button);
   button.addEventListener("click", function(){
     reset();
   });
 }
 createButton();






























// document.addEventListener("DOMContentLoaded", function(){






// // //In order: USA, Paraguay, Uruguay, West Australia, Persia, France, Ukraine, Chinese Empire, Brazil, Kingdom of Romania,
// // // Kingdom of Norway, Siam, Japanese Empire, Kingdom of Italy, Russian Empire, Timor, Denmark, Chile.
// // var pieces = ["http://i.imgur.com/YKzCeGb.jpg?1", "http://i.imgur.com/EToBKvP.jpg?1", "http://i.imgur.com/S2w5qB4.jpg?1",
// // "http://i.imgur.com/pZJ45Zo.jpg?1", "http://i.imgur.com/btPfvgE.jpg?1", "http://i.imgur.com/wgEiBui.jpg?1", "http://i.imgur.com/7einjUS.jpg?1",
// // "http://i.imgur.com/bBtFWxU.jpg?1", "http://i.imgur.com/JD8RrsY.jpg?1", "http://i.imgur.com/CXaNJ8z.jpg?1", "http://i.imgur.com/D9pf3gd.jpg?1",
// // "http://i.imgur.com/JHDRuQI.jpg?1", "http://i.imgur.com/qkr392X.jpg?1", "http://i.imgur.com/j56Zor1.jpg?1", "http://i.imgur.com/Rey4ryX.jpg?1",
// // "http://i.imgur.com/zYnE1to.jpg?1", "http://i.imgur.com/KLygLjX.jpg?1", A"http://i.imgur.com/Guch6ja.jpg?1"];

// var pieces = ["USA", "Paraguay", "Uruguay", "West Australia", "Persia", "France", "Ukraine", "Chinese Empire", "Brazil", "Kingdom of Romania",
// "Kingdom of Norway", "Siam", "Japanese Empire", "Kingdom of Italy", "Russian Empire", "Timor", "Denmark", "Chile", "USA", "Paraguay", "Uruguay", "West Australia", "Persia",
// "France", "Ukraine", "Chinese Empire", "Brazil", "Kingdom of Romania",
// "Kingdom of Norway", "Siam", "Japanese Empire", "Kingdom of Italy", "Russian Empire", "Timor", "Denmark", "Chile"]


// var gamePiece = document.createElement('div'); // creating the divs


// var allPieces = []; // empty array that will hold
// var board = document.getElementById("memory-game")

// // // suffle array is the Fisher-Yates Shuffle method which can be found at "stackoverflow"
// // function shuffle(array) {
// //   var currentIndex = array.length, temporaryValue, randomIndex;

// //   // While there remain elements to shuffle...
// //   while (0 !== currentIndex) {

// //     // Pick a remaining element...
// //     randomIndex = Math.floor(Math.random() * currentIndex);
// //     currentIndex -= 1;

// //     // And swap it with the current element.
// //     temporaryValue = array[currentIndex];
// //     array[currentIndex] = array[randomIndex];
// //     array[randomIndex] = temporaryValue;
// //   }

// //   return array;
// // }/// cited at the start of the function and again here (Fisher-Yates me)



// function makeBoard(){

//   for ( var i = 0; i < pieces.length; i++){ // looping over all the pieces array to form board
//     var board = document.getElementById("memory-game")



//     gamePiece.className ='piece'; // giving the newly created divs a classname
//     gamePiece.setAttribute('data-card', pieces[i]); //
//     gamePiece.addEventListener('click', flipCards);
//     board.appendChild(gamePiece);
//     board.appendChild(gamePiece);

//   }
// }

// // console.log(div)
// // // using this to start...need to get this to loop and integrate it into the shuffle method.
// // function flipCards() {

// //   allPieces.push(this.getAttribute('data-card'));

// //   console.log(this.getAttribute('data-card'));
// //   if (this.getAttribute('data-card') === 'USA') {
// //     this.innerHTML = "<img src='http://i.imgur.com/YKzCeGb.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Paraguay') {
// //     this.innerHTML = "<img src='http://i.imgur.com/EToBKvP.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Uruguay') {
// //     this.innerHTML = "<img src='http://i.imgur.com/S2w5qB4.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'West Australia') {
// //     this.innerHTML = "<img src='http://i.imgur.com/pZJ45Zo.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Persia') {
// //     this.innerHTML = "<img src='http://i.imgur.com/btPfvgE.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'France') {
// //     this.innerHTML = "<img src='http://i.imgur.com/wgEiBui.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Ukraine') {
// //     this.innerHTML = "<img src='http://i.imgur.com/7einjUS.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Chinese Empire') {
// //     this.innerHTML = "<img src='http://i.imgur.com/bBtFWxU.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Brazil') {
// //     this.innerHTML = "<img src='http://i.imgur.com/JD8RrsY.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Kingdom of Romania') {
// //     this.innerHTML = "<img src='http://i.imgur.com/CXaNJ8z.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Kingdom of Norway') {
// //     this.innerHTML = "<img src='http://i.imgur.com/D9pf3gd.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Siam') {
// //     this.innerHTML = "<img src='http://i.imgur.com/JHDRuQI.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Japanese Empire') {
// //     this.innerHTML = "<img src='http://i.imgur.com/qkr392X.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Kingdom of Italy') {
// //     this.innerHTML = "<img src='http://i.imgur.com/j56Zor1.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Russian Empire') {
// //     this.innerHTML = "<img src='http://i.imgur.com/Rey4ryX.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Timor') {
// //     this.innerHTML = "<img src='http://i.imgur.com/zYnE1to.jpg?1'>";
// //   } else if (this.getAttribute('data-card') === 'Denmark') {
// //     this.innerHTML = "<img src='http://i.imgur.com/KLygLjX.jpg?1'>";
// //   } else {
// //     this.innerHTML = "<img src='http://i.imgur.com/Guch6ja.jpg?1'>";
// //   }


// // // var title = document.createElement("h1")
// // // var titleText = document.createTextNode("Memory Game")
// // // title.appendChild(titleText)
// // // document.body.appendChild(title)



// // });













































// alert("hello!")






// need to place all of the gameIamges on the 36 td. After that I need to put a event listener
// that will look for a click and then reveal the selected td. If the two that you select are matches
// the keep the images flipped. If they are not matches then flip the cards back. keep this going until
// all tiles are flipped at which time the player can stop the clock and let player two play.

// Going to set two alike images to one another and if they are the same
// its a match and they stay on the board. If not then the cards will flip
// back.

// var boardPieces = shuffle(pieces);
//   for (i = 0; i < boardPieces.length; i++) {   // looping through the full board
//      td = document.getElementById("columnId");
//      td.appendChild(boardPieces[i]);


// }

// var newBoard = shuffle(fullBoard);

// for (var i = 1; i < td/2; i++) {  //
//   var pieceOne = document.getElementById(columnId);
//   var pieceTwo = document.getElementById(columnId+td/2);


//   pieceOne.setAttribute("data-image", columnId);
//   pieceTwo.setAttribute("data-image", columnId);


//   var picOne
//   var picTo
// }








});

























