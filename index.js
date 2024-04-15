let sum = 0
let compSum = 0
let isAlive = true
let hasBlackJack = false

function startGame() {

    isAlive = true

    //player's hand
    let firstCard = Math.floor(Math.random() * 10) + 2 // *10 give numbers 0 to 9, + 2 , gives 2 to 11
    console.log("Your first card is " + firstCard)

    let secondCard = Math.floor(Math.random() * 10) + 2
    console.log("Your second card is " + secondCard)

    sum = firstCard + secondCard
    console.log("Your hand's total: " + sum) 

    if (sum <=20) {
        console.log("Would you like to draw a new card OR do you stand?")
    } else if (sum === 21) {
        console.log("Woo hoo! You've got Blackjack!")
        hasBlackJack = true
    } else {
        console.log("You're out of the game!")
        isAlive = false
    }

    //computer's hand
    let compFirstCard = Math.floor(Math.random() * 10) + 2 

    let compSecondCard = Math.floor(Math.random() * 10) + 2

    compSum = compFirstCard + compSecondCard

    if (compSum < 17) {
        let compNewCard = Math.floor(Math.random() * 10) + 2;
        compSum += compNewCard;
    } else {
        return compSum
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
            console.log("Would you like to draw a new card or stand?")
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

function stand() {
    if (isAlive === true) {
        console.log("Your hand's total: " + sum)
        console.log("Your opponent's hand total: " + compSum)

        if (sum < compSum && compSum <= 21) {
            console.log("Sorry, your opponent won.")
            isAlive = false
        } else if (sum === compSum) {
            console.log("Oh my goodness, it's a tie!")
            isAlive = false
        } else {
            console.log("Well done! You've won!")
            isAlive = false
        }
    } else {
        console.log("Please select Start a New Game to play another game.")
    }
}

function quit() {
    console.log("Thank you for playing!")
    isAlive = false
}

// Make front end of this game...