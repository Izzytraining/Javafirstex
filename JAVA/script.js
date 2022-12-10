//password

let password = "passwordhere";
if (password.length > 7) {
console.log('true')}
else {
    console.log('false')
}



//super dooper looper
let height = ""

if (height >= 150) {
    console.log("you can go on the ride")
}
else if (height <= 150) {
  console.log("sorry you're not tall enough")
}
else {
    console.log("please enter a number")
}


//Dice prize

let diceone =  Math.floor(Math.random() * 6 + 1)
let dicetwo =  Math.floor(Math.random() * 6 + 1)

if (diceone == 6 && dicetwo == 6 ) {
    console.log("You win a top prize of a Bear ")
}
else if (diceone === dicetwo ) {
    console.log("You win 3 Free Throws")
}

else if (diceone == 2,4,6 && dicetwo == 2,4,6) {
    console.log("You win 1 Free Throw")
}

else {
    console.log("You lose the game")
}














