let sum = 0
let isAlive = true
let hasBlackJack = false

function startGame() {

    isAlive = true

    let firstCard = Math.floor(Math.random() * 10) + 2 // *10 give numbers 0 to 9, + 2 , gives 2 to 11
    console.log("Your first card is " + firstCard)

    let secondCard = Math.floor(Math.random() * 10) + 2
    console.log("Your second card is " + secondCard)

    sum = firstCard + secondCard
    console.log("Your hand's total: " + sum) 

    if (sum <=20) {
        console.log("Would you like to draw a new card?")
    } else if (sum === 21) {
        console.log("Woo hoo! You've got Blackjack!")
        hasBlackJack = true
    } else {
        console.log("You're out of the game!")
        isAlive = false
    }
}

startGame()

function drawCard() {
    if (isAlive === true) {
        let newCard = Math.floor(Math.random() * 10) + 2;
        console.log("Your new card: " + newCard)
        sum += newCard;
        console.log("Your new hand's total: " + sum)

        if (sum <=20) {
            console.log("Would you like to draw a new card?")
        } else if (sum === 21) {
            console.log("Woo hoo! You've got Blackjack!")
            hasBlackJack = true
        } else {
            console.log("You're out of the game!")
            isAlive = false
        }
    } else if (hasBlackJack === true) {
        console.log("You've won! Start a New Game!")
    } else {
        console.log("Try again! Start a New Game!")
    }
} 

function quit() {
    console.log("Thank you for playing!")
    isAlive = false
}

// Make front end of this game...