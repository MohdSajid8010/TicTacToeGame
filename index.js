
let btnEls = Array.from(document.getElementsByClassName("btn"));
// console.log(btnEls[0].textContent, btnEls[0]);


let winEl = document.getElementById("winId");


function Gameover(winner) {
    winEl.innerText = winner;
    winEl.style.fontSize = "18px";

    turnForEl.innerText = "";
    resetBtn.style.background = "palevioletred";
    resetBtn.style.color="white";

}



function checkForWin() {

    let bt0 = btnEls[0].textContent;
    let bt1 = btnEls[1].textContent;
    let bt2 = btnEls[2].textContent;
    let bt3 = btnEls[3].textContent;
    let bt4 = btnEls[4].textContent;
    let bt5 = btnEls[5].textContent;
    let bt6 = btnEls[6].textContent;
    let bt7 = btnEls[7].textContent;
    let bt8 = btnEls[8].textContent;

    let wins = [

        [bt0, bt1, bt2],
        [bt3, bt4, bt5],
        [bt6, bt7, bt8],

        [bt0, bt3, bt6],
        [bt1, bt4, bt7],
        [bt2, bt5, bt8],

        [bt0, bt4, bt8],
        [bt2, bt4, bt6]

    ]

    for (let i = 0; i < wins.length; i++) {

        // console.log(wins[i][0]=="X"&&wins[i][1]=="X"&&wins[i][2]=="X")
        if (wins[i][0] == "X" && wins[i][1] == "X" && wins[i][2] == "X") {

            Gameover("X win");
        } else if (wins[i][0] == "O" && wins[i][1] == "O" && wins[i][2] == "O") {

            Gameover("O win");
        }
    }


    function checkDraw() {
        let draw = [bt0, bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8];
        for (let val of draw) {
            if (val === "") {
                return false;
            }
        }
        return true;
    }
    if (checkDraw()) {
        return Gameover("draw!");

    }

    // console.log(btnEls[0].textContent, btnEls[0]);

    //     console.log(wins[1][0])
    //     console.log(wins[2][0])
    //     console.log(wins[3][0])

}




function changeTurn() {
    if (turn === "X") {
        turn = "O"
    } else {
        turn = "X";
    }
}


let turnForEl = document.getElementById("turnId");
let turn = "X";
btnEls.forEach((btnEl) => {
    // console.log(btnEl);
    btnEl.addEventListener("click", (e) => {
        // console.log(e.target);

        if (e.target.textContent == "") {
            // console.log(turn);

            e.target.textContent = turn;
            
            changeTurn();

            if(e.target.textContent=="X")
            {
                e.target.style.color="pink";

            }else{
                e.target.style.color="white";

            }

            // console.log(turn);
            turnForEl.innerText = "turn for : " + turn;
            checkForWin();
        }

    })
})




let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", startGameAgain);
function startGameAgain() {
    turn = "X";
    turnForEl.innerText = "turn for : X";
    winEl.innerText = "";

    btnEls.forEach((btnEl) => {
        btnEl.textContent = "";
    })
    resetBtn.style.background = "pink";
    resetBtn.style.color = "pink";
    winEl.style.fontSize = "12px";


}