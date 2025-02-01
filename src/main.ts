import CMHController from './CMHController'
import './style.scss'

const exembleBlock1: HTMLElement | null = document.querySelector(".exemple-block-1") // блок в котором будет слушаться контекстное меню
const cmhV1: HTMLElement | null = document.querySelector(".cmh-v1") // контекстное меню

document.addEventListener("click", (e: MouseEvent) => { 
  // если клик был вне блока и контекстного меню, то закрываем контекстное меню
  let cmh = new CMHController(exembleBlock1, cmhV1, e)
  cmh.closeContextMenu();
})
exembleBlock1?.addEventListener("contextmenu", (e: MouseEvent) => {
  // если клик ПКМ был внутри блока, то открываем контекстное меню
  let cmh = new CMHController(exembleBlock1, cmhV1, e)
  e.preventDefault()
  cmh.openContextMenu();
})
cmhV1?.addEventListener("click", (e: Event) => {
  // отключение стандартного поведения для контекстного меню
  e.stopPropagation()
})