


    





function capitalize(string)
    {
      return string.charAt(0).toUpperCase() + string.slice(1);  
        
    }
    

function addPeriod(string)
    {
        string +=".";
       return string 
        
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




function go() //starts the game
{


    document.getElementById("correct").setAttribute('style', "visibility: visible;");
    document.getElementById("wrong").setAttribute('style', "visibility: visible;");
    document.getElementById("word").innerHTML = wordList[current];

    //document.getElementById("word").innerHTML = wordList[0];
    document.getElementById("go").setAttribute('style', "visibility: hidden;");
}

function correct() {
    current++;
    currentScore++;
    if (current == wordList.length) //if at end of videos
    {
        displayResults();
        return;

    }

    document.getElementById("word").innerHTML = wordList[current];
    document.getElementById("score").innerHTML = currentScore;

}

function wrong() {
    if (current == wordList.length) //if at end of list
    {
        displayResults();
        return;
    }

    needsWork.push(wordList[current - 1]);

    document.getElementById("word").innerHTML = wordList[current];
    current++;

}

function displayResults() {

    alert("you scored a " + Math.round(currentScore / wordList.length * 100) + "%");

    //display missed words
    for (var i = 0; i < needsWork.length; i++) {
        document.write(needsWork[i] + "<br />");
    }

    if (currentScore == wordList.length) //if got all correct
    {
        document.getElementById("word").innerHTML = perfect;

        document.getElementById("correct").setAttribute('style', "visibility: hidden;"); //hide correct button
        document.getElementById("wrong").setAttribute('style', "visibility: hidden;"); //hide wrong button
    }

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



//for removing instructions from each game

function removeElement(elementId)
{
// Removes an element from the document
var element = document.getElementById(elementId);
element.parentNode.removeChild(element);
}   


function displayMessage(message)
{
document.getElementById("message").setAttribute('style',"visibility: visible;");
document.getElementById("message").innerHTML = message;
}


