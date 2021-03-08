//Variables
/*Todos los circulos en un array*/
const allCircle = document.querySelectorAll(".circle");

/*Score del usuario y del computador*/
const scoreUser = document.getElementById("user-score");
const scoreCompu = document.getElementById("computer-score");

/*obtener las etiquetas para mostrar las reglas*/
const btnRules = document.querySelector(".btn");
const closeRules = document.querySelector(".close-rules");
const showRules = document.querySelector(".rules")

const choiceContainer = document.querySelector(".choice__container")
const choice = document.querySelector(".choice")
const youPicked = document.querySelector(".you-picked")
const housePicked = document.querySelector(".the-house-picked")

const whoWin = document.querySelector(".who-win");

//Play Again 
const playAgain = document.querySelector(".play-again")

//Array con los 5 posibles tiros para acceder con un forEach en la parte de abajo
let  arr = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

//Creo y guardo la sombra
let shadowDiv = document.createElement("div");
let clone1, clone2;

///*Funcion para hacer una elección aleatoria*/
function choiceRandom() {
    let random = Math.floor(Math.random() * arr.length);
    clone2 = document.querySelector("."+ arr[random]).cloneNode("false");
    console.log(arr[random])
    clone2.classList.add("shadow-replace")
    setTimeout(() => {
        choice.replaceChild(clone2, shadowDiv)
    },2500)
    return arr[random];
}

/*Que comimence el Juego! */
function playGame(choice) {
    //Clon que obtengo de la otra funcion, esto para lograr el efecto de animacion
    clone1.classList.add('clone');


    //Obtengo una eleccion aleatoria de la fucion choiceRandom()
    let computerChoice = choiceRandom()

    //Verificar si hay un empate antes de comparar
    if(choice !== computerChoice){
        //Si se cumple la condicion
        switch(choice + "-" +computerChoice){
            case 'rock-lizard':
            case 'rock-paper':
            case 'lizard-spock':
            case 'lizard-paper':
            case 'spock-scissor':
            case 'spock-rock':
            case 'scissor-paper':
            case 'scissor-spock':
            case 'paper-rock':
            case 'paper-spock':
                setTimeout(winner, 3000, scoreUser, "YOU WIN", 1)
                break;

            /*Como ya se cumplieron todas las 
            posibles combinaciones de Win Entonces se pierde y
            gana la computadora*/
            default:
                setTimeout(winner, 3000, scoreCompu, "YOU LOSE", 1)
                break;
        }
    }else{
        setTimeout(winner, 3000, scoreUser,"DRAWN", 0)
        
    }
}

function winner(who,words, increment){
    //Marcador
    who.innerHTML = parseInt(who.innerHTML) + increment;
    //Show Who Win
    whoWin.innerHTML = words;
    //Show Play again Button
    playAgain.style.display = "block";
    //Deslizar titulo y botones
    youPicked.classList.add("slide-left")
    housePicked.classList.add("slide-right")
    document.querySelector(".clone").classList.add("translate-circle-left")
    document.querySelector(".shadow-replace").classList.add("translate-circle-right")
} 

function main() {
    
    allCircle.forEach((element, indice) => {
        element.addEventListener('click', (e) => {
            clone1 = element.cloneNode("false")
            choice.appendChild(clone1)
            choice.appendChild(shadowDiv).classList.add("shadow")
            choiceContainer.style.display = "none"
            youPicked.style.display = "inline";
            housePicked.style.display = "inline";
            setTimeout(playGame,1, arr[indice])
        })
    });
    
    
    //Toggle para mostrar las reglas y quitarlas
    btnRules.addEventListener('click', () =>{
        showRules.classList.toggle("toggle-rules") = true;
    })
    closeRules.addEventListener('click', () => {
        showRules.classList.toggle("toggle-rules") = false;
    })
    window.onload = function () {
        showRules.classList.toggle('toggle-rules') = true;
    }

    //Reiniciar el Juego 
    playAgain.addEventListener("click", () => {
        choiceContainer.style.display = "block"
        
        whoWin.innerHTML = "";
        playAgain.style.display = "none";
        clone1.remove();
        clone2.remove();
        youPicked.classList.remove("slide-left")
        housePicked.classList.remove("slide-right")
        youPicked.style.display = "none";
        housePicked.style.display = "none";

    })
}


    



main()

    //rock.addEventListener('click', () => {
    //    playGame("rock")
    //})
    //paper.addEventListener('click', () => {
    //    playGame("paper")
    //})
    //scissors.addEventListener('click', () => {
    //    playGame("scissor")
    //})
    //lizard.addEventListener('click', () => {
    //    playGame("lizard")
    //})
    //spock.addEventListener('click', () => {
    //    playGame("spock")
    //})

