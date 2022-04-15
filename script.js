const rollBtn = document.getElementById("dice");
rollBtn.addEventListener('click', () => {
    rollForAdvice();
})

function rollForAdvice() {
    fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * (224 - 1) + 1)}`)
    .then(res => res.json())
    .then((data) =>  {
        document.getElementById("advice").innerText = `"${data.slip.advice}"`;
        document.getElementById("advice-id").innerText = `ADVICE #${data.slip.id}`;
    });
}

rollBtn.addEventListener('mouseover', () => {
    var dice = document.querySelector("#dice img");
    dice.classList.add("img-rotate");
    const timeout = setTimeout(() => {
        dice.classList.remove("img-rotate");
    }, 1000);
})

rollForAdvice();