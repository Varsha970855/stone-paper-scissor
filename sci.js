let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelectorAll("#msg");

const  genCompChoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() *3);
    return options[randIdx];

}
const drawGame=() =>{
    console.log("game was draw");
    msg.innerText="Game was draw.Play again";
};
const showWinner=(userWin) =>{
    if(userWin){
        console.log("yu win");
        msg.innerText="You win!";
    }else{
        console.log("you lose");
        msg.innerText="You lose!";
    }
};


const playGame=(userChoice) => {
    console.log("userchoice =" ,userChoice);

    const compChoice=genCompChoice();
    console.log("compchoice =" ,compChoice);

    if(userChoice==compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper" ? false :true;
        }else if(userChoice=="paper"){
            userWin=compChoice=="scissors" ?false :true;

        }else{
            compChoice=="rock" ?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        console.log(choice);
        //choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

        //});

    });
})

