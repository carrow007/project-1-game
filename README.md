# wdi-first-project




Trivia game



Original goal of this game was to create a two player triva game that would track
the score and tell which player won after both players answered the questions required of them. order is a bit off but leaving it as now since it all works...


I made an attempt to make everything with the DOM but decided to make it a little easier on myself
and made some of my elements on the html page that I could manipulate with javascript. I referenced the haunted house game to better understand dom manipulation. I also tested out bits of its code as well as code from MDN/stackoverflow to understand how to approach my triva game.

My first step was to creat an object that would contain question, possible answers and the position in the array where the right answer was. I filled up the object was all the nessessary information so that I would'nt need to worry about looking up questions later. 

I created a button via the DOM. The point of it was to allow the person taking the quiz to reload the page and try again if s/he was unhappy with the result. I tried creating a function that would do this but was unable to get it working. tried used "location.reload()" but didnt understand how to properly use it and it put my page in a continuous loop of reloading. going to work on the 'play again button' over the weekend to try to get it to actually serve a purpose.


I created a function that would print the questions to the page. I used the obj.key to grab the questions staring at the first one. I had already set my question class to the var board and made sure that the questions would appear on the page with innerhtml.

I created a function that would print the answers and by passing in my checkanswers function (i created after) i was able to mark a question wrong or right which would then prompt the the game to move onto the next function until it readed the final game over message. I made another function that was used in my checkanswers function as well. This function prints newly made divs to the top of the screen that lets you know if you were right or wrong. Tried making a score keeping function first but was hitting too many road blocks and went this route.

the css was relatively easy and I just played around with differnet values until I was happy with it all. Not sold on it visually yet but since this is only a one player game I wanted to make it look like there was more too this game then looping through a small object. Tried getting it to tell you which answer was correct before moving onto the next question but that will be something on work on going forward. 


Memory game.

did not get very far. Messed around with it a bit and referenced the memory game from the prework. ran into a road block when I tried appending images to each sqaure in the table and giving it the ability to suffle when you start a new game. Found a popular suffle method the Fisher-Yates shuffle method and would have cited that if I didnt give up on the memory game to focus more on the triva game. 

going forward I want to work off what I have or start from scrath and create a functioning memory game. Might have been too abitious trying to make a 6x6 table and will start with 4x4 first. I think a memory game (more advanced than the prework one) would be a fun and useful assignment as it requires a lot more logic then I originally thought.





