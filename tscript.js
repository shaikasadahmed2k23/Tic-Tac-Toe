let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO  = true;

const wp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box clicked"); 
        // box.innerText = "X";  
        if(turnO){
            box.innerText = "O";
            box.style.color = "blue"; // Set color for 'O'

            turnO = false;
        } else{
            box.innerText= "X";
            box.style.color = "red"; // Set color for 'O'

            turnO = true;
        }
        box.disabled = true;

        checkwinner();

    });
});

const disableBoxes = () =>{
    for(let b of boxes)
    {
        b.disabled = true;
        
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes() ;
};
const checkwinner = () =>{
    for(let p of wp){
        // console.log(p[0], p[1], p[2]);
        // if(p[0] == p[1] == p[2]){}
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
                
                // break;
            }
        }
        
    }
};
const resetGame = ()=>{
    turnO = true;
    enablebox();
    msgcont.classList.add("hide");

};
const enablebox = () =>{
    for(let b of boxes){
        b.disabled = false;
        b.innerText = "";
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);