console.log('js sourced');
var targetNumber = randomNumber();

//cash sign to remind us that it is a jQuery thing
$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
 $('#submitButton').on('click', checkAnswer);
 $('#gameBox').on('click','#newGameButton', resetGame);
 
    
}

function randomNumber(){
    return Math.round(Math.random()*(9)+1);
}

function checkAnswer(){
    var $inputValue = $('#inputField').val();
    if ($inputValue > targetNumber && $inputValue <= 10 ){
        $("#answerField").children().html("<p>lower</p>");
        $("#gameBox").css('background-color', 'yellow');
    }
    else if ($inputValue < targetNumber && $inputValue > 0 ){
        $("#answerField").children().html("<p>higher</p>");
        $("#gameBox").css('background-color', 'orange');
    }
    else if ($inputValue == targetNumber){
        $("#answerField").children().html("<p>correct</p>");
        $("#gameBox").css('background-color', 'green');
        endGame();
    }
    else {
        $("#answerField").children().html("<p>That is not an option, idiot!</p>");
        $("#gameBox").css('background-color', 'pink');
        
    }
}
function endGame(){
    targetNumber = randomNumber();
    $('#submitButton').html("<button id = 'newGameButton'>New Game!</button>");
    
}

function resetGame(){
    // $("#gameBox").css('background-color', 'gray');    
    
    $("#gameBox").css('background-color', 'gray');    
    $('#newGameButton').html("<button id = '#submitButton'>SUBMIT!</button>");
    $('inputField').val('');

}