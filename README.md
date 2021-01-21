# guessingGame_JS
A short introduction to the DOM (Document Object Model) by building a simple JavaScript guessing game app.

App Summary:
  + In this web app, the user will be prompted to guess a number from 1-10. 
  + The user will be able to input that number into a field on the website.
  + JavaScript Math function will be used to create a random number bewteen 1 and 10.
  + JavaScript will compare the randomly generated number with the number input by the user.
  + The user will be given a prompt with feedback about the guess from one of the four following responses:
      > "You got it!"
      > "Your guess was [num], that's too high. Try again."
      > "Your guess was [num], that's too low. Try again."
      > "Hey, I said between 1 and 10. You're way off. Try again."
  + The user will be allowed to guess the number until he or she guesses correctly, and which point the game is ended.
  + For debugging purposes (and to make sure the game isn't cheating) the random number that is generated will be logged to the console and may be accessed by opening the browser dev tools.
  
I originally found this tutorial and project in an article by Mandy Kendall posted to opensource.com full link here: https://opensource.com/article/21/1/learn-javascript
I did not come up with this concept on my own. This is a project that I am trying to replicate for the purposes of my own learning. 

Modifications to the original project:
  + I narrowed the number range from 1-100 to 1-10. That makes the game more take less time to explore and makes it more repeatable. In other words, you can win the game faster and play again if you like. This also helped me play around with the Math function a little bit.
  + I also added an additional response if the user inputs a number that is outside of the 1-10 range. This added a little more dynamic for cheeky players who might try to break the game and served as some extra practice for me with conditional execution.
  
I hope that you enjoy this little toy app. If this app is interesting and you want to learn more about the basic concepts of the DOM and how the app works, check out the full article listed above. I am so greatful for people posting information on how to learn to code for free online, and appreciate the long list of beginner projects that are out there for people like me to try. 

Thank you to all of those out there helping the self-taught people like me.
