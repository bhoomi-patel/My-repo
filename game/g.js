let box = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgCont=document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");


let turn0 = true; //player1(x)and player2(o)

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        chkwinner();
    });
});

const disabledBox=()=>{
    for (let boxs of box){
        boxs.disabled=true;
    }
};


const showWinner=(winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disabledBox();
}


const chkwinner = () => {
    for (let pattern of winPattern) {

        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val !="")
            {
                if(pos1Val === pos2Val && pos2Val === pos3Val ){
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
}

const enableBox=()=>{
    for (let boxs of box){
        boxs.disabled=false;
        boxs.innerText=" ";
    }
};

let resetGame = () =>{
    turn0 =true ;
    enableBox();
    msgCont.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);