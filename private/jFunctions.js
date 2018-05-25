
//for mathAddSub.html
 function go()       //starts the game
    {
        //if instructions are there remove them 
    if (document.contains(document.getElementById("inst")))
        {
           removeElement("inst");//remove instructions from page 
            
        }
        //and make  everything else visible
        document.getElementById("message").setAttribute('style',"visibility: hidden;");
        document.getElementById("submit2").setAttribute('style',"visibility: hidden;");
        document.getElementById("answer").setAttribute('style',"visibility: visible;");
        
        document.getElementById("problem").setAttribute('style',"visibility: visible;");
        //document.getElementById("submit").setAttribute('style',"visibility: visible;");
        
        document.getElementById("go").setAttribute('style',"visibility: hidden;");
        document.getElementById("displayAnswer").innerHTML = '';
        simpleProblem();
        
        document.onkeydown = function(event)
         {  
            var code = event.keyCode;


            if(code === 13)
               {

               solveIt();
               }
        }
        
        
        }
    
function simpleProblem()
    {
        
        //get 2 random bumbers between 1 and 10, and a random sign
n1 = parseInt(Math.floor(Math.random() * 10) + 1);
n2 = parseInt(Math.floor(Math.random() * 10) + 1) ;
sign = signArray[Math.floor(Math.random()*signArray.length)];
        
      
        if(sign == "-") //to make sure there are no negative numbers
            {   
                if(n2 > n1) //switch em
                   {
                   var temp = n1;
                    n1 = n2;
                    n2 = temp;
                    temp = null;
                   }
                
            }
        
        
        //and set the values in html
        document.getElementById("n1").innerHTML = n1;
        document.getElementById("sign").innerHTML = sign;
        document.getElementById("n2").innerHTML = n2;
       document.getElementById("answer").focus(); 
    }
    
function solveIt() //when button is pressed
    { 

   var answer =  document.getElementById("answer").value;

        
        //if correct
    if(n1 + n2 == answer || n1-n2 == answer) //if correct
            {
                //add to score
                score++;
                document.getElementById("score").innerHTML = score;
                document.getElementById("answer").value = '';
                document.getElementById("displayAnswer").innerHTML = answer;

                //display message for correct
                displayMessage("CORRECT");
                
                
                //random positive message
                responsiveVoice.speak(posResponses[Math.floor(Math.random() * posResponses.length)], "US English Female");

                document.getElementById("answer").setAttribute('style',"visibility: hidden;");
                document.getElementById("submit2").setAttribute('style',"visibility: visible;");
                
                
                //for enter to play again after game finished
                document.onkeydown = function(event)
                         {  
                            var code = event.keyCode;


                            if(code === 13)
                               {

                               go();
                               }
                        }
              }
          else  //incorrect
              {
                  displayMessage("TRY AGAIN");
                  responsiveVoice.speak("sorry, try again", "US English Female");
                  document.getElementById("answer").value = "";
                  document.getElementById("answer").focus();
                  
                  
              }
      }

    
//for mathReverse.html
function reverseGo()       //starts the game
    {
        
      if (document.contains(document.getElementById("inst")))
        {
           removeElement("inst");//remove instructions from page 
            
        }  
        //make all the stuf visible
        document.getElementById("message").setAttribute('style',"visibility: hidden;");
        document.getElementById("submit2").setAttribute('style',"visibility: hidden;");
        document.getElementById("problem").setAttribute('style',"visibility: visible;");
         document.getElementById("n1").setAttribute('style',"visibility: visible;");
         document.getElementById("n2").setAttribute('style',"visibility: visible;");
    document.getElementById("number").setAttribute('style',"visibility: visible;");
    document.getElementById("go").setAttribute('style',"visibility: hidden;");
        
        //clear the values in
        document.getElementById("n1").value = '';
        document.getElementById("n2").value = '';
        document.getElementById("n1").focus();
        
        reverseProblem();
        
        //enter to submit
        document.onkeydown = function(event)
         {  
            var code = event.keyCode;
            if(code === 13)
               {

               reverseSolveIt();
               }
        } 
    }
 
    function reverseProblem()
    {
        //random number between 1 and 20
        number = parseInt(Math.floor(Math.random() * 20) + 1);
        n2 = parseInt(Math.floor(Math.random() * number) + 1);
        sign = signArray[Math.floor(Math.random()*signArray.length)];
        
      
        if(sign == "-") //to make sure there are no negative numbers
            {   
                if(n2 < number) //switch em
                   {
                       
                       
                       
                   var temp = number;
                    number = n2;
                    n2 = temp;
                    temp = null;
                   }
                
                
            }
        
        //display
        document.getElementById("number").innerHTML = number;
        document.getElementById("n2").innerHTML = n2;
        document.getElementById("sign").innerHTML = sign;
    }
    
   function reverseSolveIt() //when button is pressed
    { 
        
       var n1 =  document.getElementById("n1").value;
        var n2 =  document.getElementById("n2").innerHTML;
        
       
        if((sign == "+" && parseInt(n1) + parseInt(n2) == number) ||
          (sign == "-" && parseInt(n2) - parseInt(n1) == number)) //if correct
            {
                //show message for good job and gettting it correct
              displayMessage("CORRECT");
                responsiveVoice.speak(posResponses[Math.floor(Math.random() * posResponses.length)], "US English Female");
              score++;
              document.getElementById("score").innerHTML = score;
                document.getElementById("submit2").setAttribute('style',"visibility: visible;");
               
             document.onkeydown = function(event)
                 {  
                    var code = event.keyCode;
                    if(code === 13)
                       {

                       reverseGo();
                       }
                } 


            }
          else  //incorrect
              {
                 displayMessage("INCORRECT");
                  responsiveVoice.speak("sorry, try again", "US English Female");
                  document.getElementById("n1").value = '';
                document.getElementById("n2").value = '';
                document.getElementById("n1").focus();
                 
            }
          
         
         
    }


//for readingAnimal.html
function animalGo()
    {
        //if instructions are there
        if (document.contains(document.getElementById("inst")))
        {
           removeElement("inst");//remove instructions from page 

        }
        
        //clear message
        displayMessage("");
        
        
        makeGame();
       document.getElementById("image").setAttribute('style',"visibility: visible;");
        document.getElementById("word").setAttribute('style',"visibility: visible;");
        document.getElementById("bottomTries").setAttribute('style',"visibility: visible;");
        document.getElementById("submit2").setAttribute('style',"visibility: hidden;");
        
        document.onkeydown = function(event)
         {  //get the key pressed
            var key = String.fromCharCode(event.keyCode);
             var code = event.keyCode;

             //make it lower
             Key = key.toLowerCase();

            //call function
             checkLetter(cloneBlank,cloneArray, Key, code);
         }
        
    }
  
function checkLetter(cloneBlank, cloneArray, letter, keyCode)
    {
       var length = cloneBlank.length;
        letter = letter.trim();
        letter = letter.toLowerCase();
        var tick = 0;//for if the letter was success

                for(var x = 0; x < length; x++)
                {

                    if(letter == cloneBlank[x]) //if found
                    {
                        //switch the correspoding letter from _ to letter
                        cloneArray[x] = letter; 
                        document.getElementById("word").innerHTML = cloneArray.join(" ");
                            
                        tick = 1; //mark it
                    }
                    
                }

               

                if(tick == 0) //if letter isnt found  decrement triesleft
                {   
                    //remove one from tries left
                    triesLeft --;
                    
                    //if out of tries
                    if(triesLeft == 0)
                    {
                        //display message
                        displayMessage("sorry");
                        responsiveVoice.speak("sorry, please play again", "US English Female");
                        
                        //start over and go again
                        i = 0;
                        animalGo();



                    }else{
                        
                        responsiveVoice.speak("try again", "US English Female");
                    }
                    
                    
                    
                    
                }else{
                    responsiveVoice.speak(posResponses[Math.floor(Math.random() * posResponses.length)], "US English Female");
                }


                //if the complete the puzzle
                if(isInArray("_",cloneArray) == false)//if no -'s left in array
                {
                    displayMessage("WINNER");
                    
                     document.onkeydown = function(event)
                         {  
                            var code = event.keyCode;


                            if(code === 13)
                               {

                               animalGo();
                               }
                        }
                    
                    
                    //speak it letter by letter
                   for(var q = 0;q<cloneArray.length;q++)
                        {
                        responsiveVoice.speak(cloneArray[q], "US English Female");
                        }
                    
                    //say the word on the animal again
                    responsiveVoice.speak(word, "US English Female");
                    
                    document.getElementById("submit2").setAttribute('style',"visibility: visible;");
                    
                    //increment to next animal
                    i++;
               
                }

                //redisplay the tries left
                document.getElementById("attemptsLeft").innerHTML = triesLeft;

                

                
              
                
    }
  
   //see if its in the array
function isInArray(value, array) 
{
    return array.indexOf(value) > -1;
}
    
function makeGame()
    {
          
        //sort arrays into ascending order on length
        Animals.sort(function(a,b)
                    {
            return a.length - b.length || a.localeCompare(b);
            
        })
        
        //get one word for databse
        word = Animals[i];
        
        
        //make it lowercase
        word = word.toLowerCase();

        //for attempts
        triesLeft = word.length + 4;


        //copy it
        clone = word;
        
        //set the pic of the  animal
        document.getElementById("image").innerHTML= "<img src = 'css/" + word + ".png'>"; 

        //show tries left
        document.getElementById("attemptsLeft").innerHTML = triesLeft;

                //split string into array
        cloneArray = clone.split("");

        //make copy of array before splitting to compare to
        cloneBlank = cloneArray.slice(0);

        //replace all letters with blanks
        blankWord = makeBlanks(cloneArray);
        document.getElementById("word").innerHTML = blankWord.join(" ");
        
        //speak the name of th animal
        responsiveVoice.speak(word, "US English Female");
    }
    
function makeBlanks(cloneArray)
//make all the letters into "-"s
    {
        var x;
        for(x = 0; x < cloneArray.length; x++)
        {
            cloneArray[x] = "_";
        }
        return cloneArray;
        
    }
    
    
 //for readingSight.html
 function correct()//if corret button is pressed
    { 
        //go to next word
        current++;
        
        //incremernt score
        currentScore++;
        
     if(current == wordList.length) //if at end of words
     {
         displayResults();//display the results
         return;
         
     }
        
        document.getElementById("word").innerHTML = wordList[current];
        document.getElementById("score").innerHTML = currentScore;
        
    }

function displayResults()
    {
        //display percentage of score
        displayMessage("you scored a " + Math.round(currentScore/wordList.length * 100) + "%");
        document.getElementById("word").style.fontSize = "medium";
        
        
        //display all the words that need work
        document.getElementById("word").innerHTML = needsWork;
        
        
        
        if(currentScore == wordList.length ) //if got all correct
            {
                displayMessage("PERFECT");
                responsiveVoice.speak("PERFECT", "US English Female");
            }
         document.getElementById("correct").setAttribute('style',"visibility: hidden;"); //hide correct button
         document.getElementById("wrong").setAttribute('style',"visibility: hidden;");//hide wrong button
        document.getElementById("submit2").setAttribute('style',"visibility: visible;");//hide wrong button
        
    }
    
function sightGo()       //starts the game
    {
        current = 0;
        currentScore = 0;
        
if (document.contains(document.getElementById("inst")))
        {
           removeElement("inst");//remove instructions from page 
            
        }
     document.getElementById("word").style.fontSize = "100px";   
     document.getElementById("correct").setAttribute('style',"visibility: visible;");
    document.getElementById("wrong").setAttribute('style',"visibility: visible;");
    document.getElementById("word").innerHTML = wordList[current];    
    document.getElementById("go").setAttribute('style',"visibility: hidden;");
        document.getElementById("message").setAttribute('style',"visibility: hidden;");
        }

function wrong()
    {
        
        
        if(current == wordList.length)  //if at end of list
     {
         displayResults();
         return;
     }
        current++;//go to next word
        
        //add the wrong word to the array of ones that need work
       needsWork.push(wordList[current-1]);
        
      
       document.getElementById("word").innerHTML = wordList[current];
       
        
    }
    
    

 




//for readingSentences.html

function addPeriod(string)//adds persiod to end of word
    {
        string +=".";
       return string 
        
    }

function buildSillySentence()
    {
        document.getElementById("silly").setAttribute('style',"visibility: visible; height: 3em");
    document.getElementById("simple").setAttribute('style',"visibility: hidden; height:0px;");
        
    var art = articles[Math.floor(Math.random() * articles.length)];
    art = capitalize(art);   
    document.getElementById("sillyArt").innerHTML = art;
        
        
        
        
    document.getElementById("sillyAdj").innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById("sillyNoun").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("sillyVerb").innerHTML = verbs[Math.floor(Math.random() * verbs.length)];
        
        document.getElementById("sillyPrep").innerHTML = prepositions[Math.floor(Math.random() * prepositions.length)];
    document.getElementById("sillyArt2").innerHTML = articles[Math.floor(Math.random() * articles.length)];
    document.getElementById("sillyAdj2").innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)];
        
     
        
        //add period to end of last word
        var noun2 = nouns[Math.floor(Math.random() * nouns.length)];
        noun2 = addPeriod(noun2);
        document.getElementById("sillyNoun2").innerHTML = noun2;
     }

function buildSimpleSentence()       //starts the game
    {
   
    
    document.getElementById("simple").setAttribute('style',"visibility: visible; height: 2em;");
    document.getElementById("silly").setAttribute('style',"visibility: hidden; height:0px;");
    
        
     var art = articles[Math.floor(Math.random() * articles.length)];
     art = capitalize(art);
     document.getElementById("simArt").innerHTML = art;
        
    
        
        
    document.getElementById("simAdj").innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById("simNoun").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
        
        
    //add period to end of last word
        var verb = verbs[Math.floor(Math.random() * verbs.length)];
        verb = addPeriod(verb);
        document.getElementById("simVerb").innerHTML = verb;
    }
 
function capitalize(string)
    {//capatalize firsst letter of a word
      return string.charAt(0).toUpperCase() + string.slice(1);  
        
    }
    
function sentencesGo()
{
     //if instructions are there
        if (document.contains(document.getElementById("inst")))
        {
           removeElement("inst");//remove instructions from page 
        }
    
    //and make everything else visible
     document.getElementById("simplego").setAttribute('style',"visibility: visible;");
        document.getElementById("sillygo").setAttribute('style',"visibility: visible;");
    
}
 



/*for nav*/

/* Set the width of the side navigation to 350px */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


/* Set the width of the side navigation to 0 */
function openNav() {
    document.getElementById("mySidenav").style.width = "225px";
    document.getElementById("main").style.marginLeft = "225px";
}







//for displaying messages on each page
function displayMessage(message)
{
document.getElementById("message").setAttribute('style',"visibility: visible;");
document.getElementById("message").innerHTML = message;
}

//for removing elements from the pages(instructions)
function removeElement(elementId)
{
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
} 
