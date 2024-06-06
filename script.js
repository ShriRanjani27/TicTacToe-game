
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true; //player X (first player)

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const diableAllBoxes=()=>
    {
        for(let box of boxes){
            box.disabled=true;
        }
    }

    const enableAllBoxes=()=>
        {
            for(let box of boxes){
                box.disabled=false;
                box.innerText="";
            }
        }
const showWinner=(winner)=>
    {
        msg.innerText=`Congradulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
    }
const checkWinner= ()=>
    {
        for(let pattern of winPattern){
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;

        if(val1 !="" && val2!="" && val3!="")
            {
                if(val1===val2 && val2===val3)
                    {
                     console.log("winner");
                     diableAllBoxes();
                     showWinner(val1);
                    }
            }    
    
    }
    };

const resetGame=()=>
    {
        turnX=true;
        enableAllBoxes();
        msgContainer.classList.add("hide");
    }
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);