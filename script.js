
const comp=['rock','paper','scissor']
function computerPlay(){

    let randNo=Math.floor(Math.random()*3);
    return comp[randNo];
}

let playerScore=0,computerScore=0,count=0;

function play(pSelection){

    console.log("in play");
    console.log(pSelection);
    let cSelection=computerPlay(); //Computer choice
    console.log("Computers choice");
    console.log(cSelection);


    const rockSelected = document.getElementById("rockdiv");
    const paperSelected = document.getElementById("paperdiv");
    const scissorsSelected = document.getElementById("scissordiv");
    const computerRockSelected = document.getElementById("crockdiv");
    const computerPaperSelected = document.getElementById("cpaperdiv");
    const computerScissorsSelected = document.getElementById("cscissordiv");


    if(cSelection==='rock'){
        
        computerRockSelected.style.backgroundColor = "#7987e9";
        computerPaperSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }else if(cSelection==='paper'){

        computerPaperSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }else if(cSelection==='scissor'){

        computerScissorsSelected.style.backgroundColor="#7987e9";
        computerRockSelected.style.backgroundColor="white";
        computerPaperSelected.style.backgroundColor="white";
        
    }
    if(pSelection==='rock'){
        count++;
        rockSelected.style.backgroundColor="pink";
        paperSelected.style.backgroundColor="white";
        scissorsSelected.style.backgroundColor="white";
        if(cSelection==='rock'){

            console.log('draw');
            console.log(playerScore);
            const p=document.getElementById("playerScoreid").innerHTML= " Score:  "+playerScore;
            const c=document.getElementById("computerScoreid").innerHTML= "Score: "+computerScore;
            document.getElementById("winner").innerHTML="Round "+count+": It's a draw!";
        }
        else if(cSelection==='paper'){
            computerScore++;
            console.log(playerScore);
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: '+computerScore;
            document.getElementById("winner").innerHTML="Round "+count+": Paper beats rock! You loose!";
        }
        else if(cSelection==='scissor'){
            playerScore++;
            console.log(playerScore);
           const p= document.getElementById("playerScoreid").innerHTML= 'Score: '+playerScore;
           document.getElementById("winner").innerHTML="Round "+count+": You won!";
        }
        
    }else if(pSelection==='paper'){
        count++;
        rockSelected.style.backgroundColor="white";
        paperSelected.style.backgroundColor="pink";
        scissorsSelected.style.backgroundColor="white";
        if(cSelection==='rock'){
            playerScore++;
            const p= document.getElementById("playerScoreid").innerHTML= 'Score: '+playerScore;
            document.getElementById("winner").innerHTML="Round "+count+": You won!";

        }
        else if(cSelection==='paper'){
          
            const p=document.getElementById("playerScoreid").innerHTML= ' Score: '+playerScore;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: '+computerScore;
            document.getElementById("winner").innerHTML="Round "+count+": It's a Draw!";
        } 
        else if(cSelection==='scissor'){
            computerScore++;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score:'+computerScore;
            document.getElementById("winner").innerHTML="Round "+count+": You loose!";
        }
    }else if(pSelection==='scissor'){
        count++;
        rockSelected.style.backgroundColor="white";
        paperSelected.style.backgroundColor="white";
        scissorsSelected.style.backgroundColor="pink";
        if(cSelection==='rock'){
            computerScore++;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: '+computerScore;
            document.getElementById("winner").innerHTML="Round "+count+": You loose!";
        }
        else if(cSelection==='paper'){
            playerScore++;
            const p=document.getElementById("playerScoreid").innerHTML= 'Score: '+playerScore;
            document.getElementById("winner").innerHTML="Round "+count+": You won!";
        }else if(cSelection==='scissor'){
          
            const p=document.getElementById("playerScoreid").innerHTML= 'Score: '+ playerScore;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: ' +computerScore;
            document.getElementById("winner").innerHTML="Round "+count+": It's a Draw!";
        }
    }
    if(count==5)
        endGame(playerScore,computerScore);
}

 

function endGame(playerScore,computerScore){

        if(playerScore==computerScore){

            document.getElementById("winner").innerHTML="IT'S A DRAW!!<br>"+playerScore+":"+computerScore;
        }
        else if(playerScore>computerScore){
            document.getElementById("winner").innerHTML="YOU WIN!!<br>"+playerScore+":"+computerScore;
            document.getElementById("winner").style.color="green";
        }
        else{
            document.getElementById("winner").innerHTML="YOU LOST!<br>"+playerScore+":"+computerScore;
            document.getElementById("winner").style.color="red";
        }
        
        const myTimeout = setTimeout(playAgain, 2000);

}

function playAgain(){
    let play = confirm("Do you want to play again??")
        if (play)
            location.reload();
        else
        {
            alert("Thanks for playing!")
            location.reload();

        }
}

