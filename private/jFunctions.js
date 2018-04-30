


    












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


//hangman stuff
