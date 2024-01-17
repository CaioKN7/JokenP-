
const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, jokaPlay())
}

const jokaPlay = () => {
    const jokaChoices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return jokaChoices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine);

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if ((human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")) {
        result.innerHTML = "Você ganhou!"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Perdeu pro Joka 10 ;)"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}