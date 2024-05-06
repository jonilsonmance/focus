import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

// função de contagem onde realiza  a contagem e para quanndo clica navamente no botão, fazendo com que quando clicado altere o estado da aplicação.
export function countdown(){

  clearTimeout(state.countdownId)

  if(!state.isRunning){
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId =  setTimeout(()=> countdown(), 1000)
}


export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes // o ponto de interrogação informa se não for passado nenhum parametro faz com que pegue a variavel do state
  seconds = seconds ?? state.seconds

  //Adiciona os elementos na tela 
  el.minutes.textContent = String(minutes).padStart(2,0)
  el.seconds.textContent = String(seconds).padStart(2,0)
}