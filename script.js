const cards  = document.querySelectorAll(".card-outer")
const AllImage = document.querySelectorAll(".card-front img")
// console.log(AllImage)

let firstMove , secondMove;

cards.forEach(card => card.addEventListener("click" , ()=>{
if(card !== firstMove){
    card.classList.toggle('flip')
    if(!firstMove){
        return firstMove = card
    }
    // firstMove = card;
    secondMove =card
    let img1 = firstMove.querySelector("")
    console.log(secondMove , firstMove) 
}
  
}))


