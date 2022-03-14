
const comp=['rock','paper','scissor']
function computerPlay(){

    let randNo=Math.floor(Math.random()*3);
    return comp[randNo];
}

function playSound() {
    const buttonPress = document.getElementById("startbuttonsound");
    buttonPress.play();
}
 let mainButton = document.getElementById("rockdiv");
 if(mainButton){
     mainButton.addEventListener("click",playSound);
 }
 else console.log("Cnnot add sound");

document.addEventListener("click",choiceSelection)

function choiceSelection(event){

    let element=event.target;
    console.log(element);


    if(element.classList.contains('rock') && element.id ===("rockdiv")){
        
        console.log('rock');
        play('rock');

    }else if(element.classList.contains('gameselectiontext') && element.id==='procktxt'){
        console.log('rock');
        play('rock');
    }
    else if(element.classList.contains('rockimg') && element.id==='prock'){
        console.log('rock');
        play('rock');
    }


    if(element.classList.contains('paper') && element.id ===("paperdiv")){
        console.log('paper');
        play('paper');

    }else if(element.classList.contains('gameselectiontext') && element.id==='ppapertxt'){
        console.log('paper');
        play('paper');
    }
    else if(element.classList.contains('paperimg') && element.id==='ppaper'){
        console.log('paper');
        play('paper');
    }


    if(element.classList.contains('scissor') && element.id ===("scissordiv")){
        console.log('scissor');
        play('scissor');

    }else if(element.classList.contains('gameselectiontext') && element.id==='pscissortxt'){
        console.log('scissor');
        play('scissor');
    }
    else if(element.classList.contains('scissorimg') && element.id==='pscissor'){
        console.log('scissor');
        play('scissor');
    }

}

let playerScore=0,computerScore=0,count=0;

function play(pSelection){

    console.log("in play");
    console.log(pSelection);
    let cSelection=computerPlay();
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
        }
        else if(cSelection==='paper'){
            computerScore++;
            console.log(playerScore);
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: '+computerScore;
        }
        else if(cSelection==='scissor'){
            playerScore++;
            console.log(playerScore);
           const p= document.getElementById("playerScoreid").innerHTML= 'Score: '+playerScore;
        }
        
    }else if(pSelection==='paper'){
        count++;
        rockSelected.style.backgroundColor="white";
        paperSelected.style.backgroundColor="pink";
        scissorsSelected.style.backgroundColor="white";
        if(cSelection==='rock'){
            playerScore++;
            const p= document.getElementById("playerScoreid").innerHTML= 'Score: '+playerScore;
        }
        else if(cSelection==='paper'){
          
            const p=document.getElementById("playerScoreid").innerHTML= ' Score: '+playerScore;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: '+computerScore;
        } 
        else if(cSelection==='scissor'){
            computerScore++;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score:'+computerScore;
        }
    }else if(pSelection==='scissor'){
        count++;
        rockSelected.style.backgroundColor="white";
        paperSelected.style.backgroundColor="white";
        scissorsSelected.style.backgroundColor="pink";
        if(cSelection==='rock'){
            computerScore++;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: '+computerScore;
        }
        else if(cSelection==='paper'){
            playerScore++;
            const p=document.getElementById("playerScoreid").innerHTML= 'Score: '+playerScore;
        }else if(cSelection==='scissor'){
          
            const p=document.getElementById("playerScoreid").innerHTML= 'Score: '+ playerScore;
            const c=document.getElementById("computerScoreid").innerHTML= 'Score: ' +computerScore;
        }
    }
    if(count==5)
        endGame(playerScore,computerScore);
}

 

function endGame(playerScore,computerScore){

        if(playerScore==computerScore){

            document.getElementById("winner").innerHTML="IT'S A DRAW!!";
        }
        else if(playerScore>computerScore){
            document.getElementById("winner").innerHTML="YOU WIN!!";
            document.getElementById("winner").style.color="green";
        }
        else{
            document.getElementById("winner").innerHTML="YOU LOST!";
            document.getElementById("winner").style.color="red";
        }
//    playAgain();

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

