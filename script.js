
const cards = document.querySelectorAll(".card-outer")
const btn = document.querySelector(".scoreBtn")

let firstCard, secondCard;
let board = true
score = 0

cards.forEach(card => card.addEventListener("click", () => {
    btn.innerText = score

    if (!board) return; // Do nothing if the board is unlocked
    if (card == firstCard) return; // no action if clicked same card

    card.classList.add("flip") // flip the card

    if (!firstCard) {
        firstCard = card;
        console.log(firstCard);
        return;
    }

    secondCard = card // if set already firstcard then clicked second card
    console.log(secondCard)

    matchCards()
}))


function matchCards() {
    firstImg = firstCard.querySelector(".card-front img").alt 
    secondImg = secondCard.querySelector(".card-front img").alt

    if (firstImg == secondImg) { // if match same alt text
        reset()
        score = score + 2
        if (score == 12) {
            congratulationsBox()
        }
    } else {
        board = false
        setTimeout(() => {
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            reset()
        }, 1000)
    }

}

function congratulationsBox() {

    const congratsBox = document.getElementById('congratulations-box');
    congratsBox.classList.remove('hidden');

    const playAgainButton = document.getElementById('play-again');
    playAgainButton.addEventListener('click', () => {
        congratsBox.classList.add('hidden');
        setTimeout(() => {
            cards.forEach(card => card.classList.remove("flip"))
            btn.innerHTML = '0'
        }, 1000)
    });
}

function reset() {
    [firstCard, secondCard] = [null, null]
    board = true
}
