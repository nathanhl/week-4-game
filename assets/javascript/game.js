$(document).ready(function(){

    //Declares that the player total, wins and losses starts at 0 when the page loadss
    var playerTotal= 0;
    var wins= 0;
    var losses= 0;

    //Random number that is shown at the beginning of the game
    //Number is between 19 - 120
    var Random=Math.floor(Math.random()*101+19);

    //Append the random number to the randomNumber id in the html
    $('#randomNumber').text(Random);

    //Assigns a random number to 
    var gem1= Math.floor(Math.random()*11+1);
    var gem2= Math.floor(Math.random()*11+1);
    var gem3= Math.floor(Math.random()*11+1);
    var gem4= Math.floor(Math.random()*11+1);

    //Displays the number of wins and losses in the corresponding divs
    $('#numberofWins').text(wins);
    $('#numberofLosses').text(losses);

    //Defines the reset function for the game
    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random);
        $('#randomNumber').text(Random);
        playerTotal= 0;
        var gem1= Math.floor(Math.random()*11+1);
        var gem2= Math.floor(Math.random()*11+1);
        var gem3= Math.floor(Math.random()*11+1);
        var gem4= Math.floor(Math.random()*11+1);
        $('#resultTotal').text(playerTotal);
    }

    //Increases wins
    function win(){
        alert('Youre a winner, baby!');
        wins++;
        $('#numberofWins').text(wins);
        reset();
    }

    //Increases losses
    function loss(){
        alert('Youre a loser, baby!');
        losses++;
        $('#numberofLosses').text(losses);
        reset();
    }

    //Defining on-click functions for each jewel
    $('#gemOne').on ('click', function(){
        playerTotal = playerTotal + gem1;
        console.log("New playerTotal= " + playerTotal);
        $('#resultTotal').text(playerTotal);
            if (playerTotal === Random){
                win();
            }
                else if (playerTotal > Random){
                loss();
            }
         });
    $('#gemTwo').on ('click', function(){
        playerTotal = playerTotal + gem2;
        console.log("New playerTotal= " + playerTotal);
        $('#resultTotal').text(playerTotal);
            if (playerTotal === Random){
                win();
            }
                else if (playerTotal > Random){
                loss();
            }
         });
    $('#gemThree').on ('click', function(){
        playerTotal = playerTotal + gem3;
        console.log("New playerTotal= " + playerTotal);
        $('#resultTotal').text(playerTotal);
            if (playerTotal === Random){
                win();
            }
                else if (playerTotal > Random){
                loss();
            }
         });
    $('#gemFour').on ('click', function(){
        playerTotal = playerTotal + gem4;
        console.log("New playerTotal= " + playerTotal);
        $('#resultTotal').text(playerTotal);
            if (playerTotal === Random){
                win();
            }
                else if (playerTotal > Random){
                loss();
            }
         });

});

