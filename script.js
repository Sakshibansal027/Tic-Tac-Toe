const message = document.querySelector(".message");
const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".btn");
let winningset = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


let gamestarted = true;
let player;
player = "X";
message.innerHTML = It's ${player} turn;
boxes.forEach(box => {
  box.addEventListener("click", () => {

    if (box.innerHTML === "" && gamestarted) {
      box.innerHTML = player;
      winningset.forEach(set => {
        const [a, b, c] = set;
        if (boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
          message.innerHTML = Congratulations ${boxes[a].innerHTML} wins!;
          gamestarted = false;
        }
      });
 if (gamestarted) {
        let allBoxesFilled = true;
        boxes.forEach(box => {
          if (box.innerHTML === "") {
            allBoxesFilled = false;
          }
        });

        if (allBoxesFilled) {
          gamestarted = false;
          message.innerHTML = "It's a draw!";
        }
   else{
        player = player === "X" ? "O" : "X";
        message.innerHTML = It's ${player} turn;
      }}}
    })
});
const exit = () => {
  boxes.forEach(box => {
    box.innerHTML = "";
  });
  gamestarted = true;
  player = "X";
  message.innerHTML = It's ${player} turn;
};

button.addEventListener("click",(e)=>{
  exit(e)
})
