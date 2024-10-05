let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let user_scores = document.querySelector("#user_score");
let comp_scores = document.querySelector("#comp_score");




const playcompchoice =()=>{
    const options = ["paper","rock","scissors"];
    const readInx = Math.floor(Math.random() * 3);
    return options [readInx];
}

const drawgame = () =>{
    console.log("game is draw");
    msg.innerText ="Game was Draw. play again.";
    msg.style.backgroundColor =  "rgb(187, 149, 149)";
}

const showwinner =(userwin , userchoices ,compchoice) =>{
    if(userwin){
        userscore++
        user_scores.innerText =  userscore;
       //console.log("user win");
       msg.innerText =` You Win Your ${userchoices} beats ${compchoice}`;
       msg.style.backgroundColor = "green";
    } else{
        compscore++
        comp_scores.innerText =  compscore;
        //console.log("User lose");
        msg.innerText =` You Lose   ${userchoices} beats  Your  ${compchoice}`;
        msg.style.backgroundColor = "red";

    }
};
const playgame = (userchoices) =>{
    console.log("user choice =" ,userchoices);
       //generate computer choice
       const compchoice = playcompchoice();
       console.log("comp choice =" ,compchoice);

       if(userchoices === compchoice ){
        // coll for draw
        drawgame();
       }else{
        let userwin = true;
        if(userchoices === "rock"){
        
            userwin = compchoice=== "paper" ? false : true;

        } else if(userchoices==="paper"){
            userwin = compchoice=== "scissors" ? false : true;
        }else{
            userwin = compchoice=== "rock" ? false : true;  
        };

        showwinner (userwin , userchoices ,compchoice);
       }
    }

    choices.forEach((choice) =>{
   
        choice.addEventListener("click",()=>{
           let userchoices = choice.getAttribute("id");
           playgame(userchoices) ;
        })
    })