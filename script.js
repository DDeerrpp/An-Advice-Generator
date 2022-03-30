const rollBtn = document.getElementById("dice");
var num = 1;
rollBtn.addEventListener('click', () => {
    rollForAdvice();
})

function rollForAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((data) =>  {
        
        if(num == data.slip.id) {
            rollForAdvice();
        } else {
            document.getElementById("advice").innerText = `"${data.slip.advice}"`;
            document.getElementById("advice-id").innerText = `ADVICE #${data.slip.id}`;
            num = data.slip.id;
        }
        
    });
}

rollBtn.addEventListener('mouseover', () => {
    var dice = document.querySelector("#dice img");
    dice.classList.add("img-rotate");
    const timeout = setTimeout(() => {
        dice.classList.remove("img-rotate");
    }, 1000);
})
