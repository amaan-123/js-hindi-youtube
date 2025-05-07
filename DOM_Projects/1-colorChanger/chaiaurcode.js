// button click => get button color => change bg to same color

const body = document.body;
const buttons = document.querySelectorAll(".button");

console.log(buttons);
buttons.forEach(function(button){
  button.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    document.body.style.backgroundColor = buttonId;
  })
})
