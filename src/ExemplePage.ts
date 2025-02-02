import CMHController from './CMHController'
import './style.scss'

const exembleBlock1: HTMLElement | null = document.querySelector(".exemple-block-1")
const cmhV1: HTMLElement | null = document.querySelector(".cmh-v1") 

const exembleBlock2: HTMLElement | null = document.querySelector(".exemple-block-2") 
const cmhV2: HTMLElement | null = document.querySelector(".cmh-v2") 

let cmhController1 = new CMHController(exembleBlock1, cmhV1)
let cmhController2 = new CMHController(exembleBlock2, cmhV2)

cmhController1.contextInit()
cmhController2.tooltipInit()

// закрытие контекстного меню при клике в пустое место вне контекстного меню
window.addEventListener("click", () =>cmhController1.closeContext())




