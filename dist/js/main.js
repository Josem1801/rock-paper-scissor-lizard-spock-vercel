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

//Aurora que se crea al ganar
const aurora = document.querySelector(".sombra1")

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
let cloneYou, cloneHouse;

///*Funcion para hacer una elección aleatoria*/
function choiceRandom() {
    let random = Math.floor(Math.random() * arr.length);
    cloneHouse = document.querySelector("."+ arr[random]).cloneNode("false");
    console.log(arr[random])
    cloneHouse.classList.add("shadow-replace")
    setTimeout(() => {
        choice.replaceChild(cloneHouse, shadowDiv)
    },2500)
    return arr[random];
}

/*Que comimence el Juego! */
function playGame(choiceYou) {
    //Clon que obtengo de la otra funcion, esto para lograr el efecto de animacion
    cloneYou.classList.add('clone');

    //Obtengo una eleccion aleatoria de la fucion choiceRandom()
    let computerChoice = choiceRandom()
    console.log(choice, )
    //Verificar si hay un empate antes de comparar
    if(choiceYou !== computerChoice){
        //Si se cumple la condicion
        switch(choiceYou + "-" +computerChoice){
            case 'rock-lizard':
            case 'rock-scissor':
            case 'lizard-spock':
            case 'lizard-paper':
            case 'spock-scissor':
            case 'spock-rock':
            case 'scissor-paper':
            case 'scissor-lizard':
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

     //Aurora al rededor del ganador
     setTimeout(() => {
        if(words === "YOU WIN"){
            aurora.classList.add("aurora-you-winner");
        }
        else if(words === "YOU LOSE"){
            aurora.classList.add("aurora-house-winner");
        }
    }, 400)
    //Deslizar titulo y botones
    youPicked.classList.add("slide-left")
    housePicked.classList.add("slide-right")
    document.querySelector(".clone").classList.add("translate-circle-left")
    document.querySelector(".shadow-replace").classList.add("translate-circle-right")
} 

function auroraWinner(){

}

function main() {
    
    allCircle.forEach((element, indice) => {
        element.addEventListener('click', (e) => {
            //Se crea un clon cuando el jugador da click en un circulo
            cloneYou = element.cloneNode("false");
            choice.appendChild(cloneYou);
            //Se agrega la sombra en la parte superior de The house Picked
            choice.appendChild(shadowDiv).classList.add("shadow");
            //Se esconde el fondo
            choiceContainer.style.display = "none";
            //Aparecen los pequeños titutos de los contricantes
            youPicked.style.display = "inline";
            housePicked.style.display = "inline";
            //Pequeñisimo Timeout para hacer efecto de deslizamiento
            setTimeout(playGame,1, arr[indice]);
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

    //Reiniciar el Juego y Eliminar todas las clases y elementos creados
    playAgain.addEventListener("click", () => {
        choiceContainer.style.display = "block"
        aurora.classList.remove("aurora-you-winner");
        aurora.classList.remove("aurora-house-winner");
        whoWin.innerHTML = "";
        playAgain.style.display = "none";
        cloneYou.remove();
        cloneHouse.remove();
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

