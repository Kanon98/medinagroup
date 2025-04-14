//Scroll header

window.addEventListener('scroll',()=>{
    const scroll = document.documentElement.scrollTop;
    const header = document.getElementById('header')
    const logo = document.getElementById('logo')
    const preHeader = document.getElementById('pre-header')
    const main = document.getElementById('main')

    // console.log(scroll)
    if(scroll > 150){
        header.classList.add('header__scroll')
        logo.classList.add('scroll__logo')
        }else{
        header.classList.remove('header__scroll')
        logo.classList.remove('scroll__logo')
        }

})

//Menú

const buttonMenu = document.getElementById('btn-menu')
const menu = document.getElementById('menu')
const shadow = document.getElementById('shadow')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const languajes = document.getElementById('options')

buttonMenu.addEventListener('click',()=>{
    buttonMenu.classList.toggle('menu__fixed')
    menu.classList.toggle('show__menu')
    shadow.classList.toggle('show__shadow')
    line1.classList.toggle('rotate')
    line2.classList.toggle('rotate')
    line3.classList.toggle('rotate')
    options.classList.remove('visible')
})

shadow.addEventListener('click',()=>{
    menu.classList.remove('show__menu')
    buttonMenu.classList.remove('menu__fixed')
    shadow.classList.remove('show__shadow')
    line1.classList.toggle('rotate')
    line2.classList.toggle('rotate')
    line3.classList.toggle('rotate')
    options.classList.remove('visible')
})



// Languaje


const languaje = document.getElementById('languaje')
const options = document.getElementById('options')
const arrow = document.getElementById('arrow-down')
const labelSelected = document.getElementById('languaje-select')
const requirements = [...document.getElementsByClassName('requirements')]

// constructor(){
//     this.initMutationObserver()
// }
//
//
// requirements.forEach(requirement =>{
//     console.log(requirement)
//     mutationObserver = new mutationObserver(mutations =>{
//         console.log(mutations)
//     } )
// })
//
//
//
//
// initMutationObserver = () =>{
//     this.mutationObserver.observe(this.mutation)
// }
//


if( labelSelected.innerText === 'CN'){
    console.log(labelSelected)
    for(const requirement of requirements){
        requirement.classList.toggle('margin')
    }
}

// Cambiar Idioma

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguaje = async (languaje)=>{
    const requestJson = await fetch(`languajes/${languaje}.json`)
    const texts = await requestJson.json()

    for(const textToChange of textsToChange){

        const section = textToChange.dataset.section
        const value = textToChange.dataset.value
        textToChange.innerHTML = texts[section][value]
    }
}

languajes.addEventListener('click',(e)=> {
    changeLanguaje(e.target.parentElement.dataset.languaje)

})


// Change flags

const flagSelected = document.getElementById('flag-select')
let pseudoElements = [...document.getElementsByClassName('pseudo-element')]



pseudoElements.forEach((callback,index)=>{

    callback.addEventListener('click',(e)=>{
        let parent = e.target.parentElement.childNodes[1].innerText
        labelSelected.innerText = parent
        let flag = e.target.parentElement.childNodes[3].childNodes[1].src
        flagSelected.src = flag
    })
})



// Clickear Menú


const pseudoMenu = document.getElementById('pseudo-menu')

const firstPseudoElement = document.getElementById('first-pseudo-element')
const secondPseudoElement = document.getElementById('second-pseudo-element')
const thirdPseudoElement = document.getElementById('second-pseudo-element')


pseudoMenu.addEventListener('click',()=>{
    options.classList.toggle('visible')
    arrow.classList.toggle('active')
})


pseudoMenu.addEventListener('mouseover',()=>{
    options.classList.add('visible-size')
    arrow.classList.add('active')
})



languaje.addEventListener('mouseleave',()=>{
        let removedor = setTimeout (() => {
        options.classList.remove('visible-size')
        arrow.classList.remove('active')
    }, 500);

    firstPseudoElement.addEventListener('mouseover',()=>{
        clearTimeout(removedor)
    })
    secondPseudoElement.addEventListener('mouseover',()=>{
        clearTimeout(removedor)
    })
    thirdPseudoElement.addEventListener('mouseover',()=>{
        clearTimeout(removedor)
    })

})

// Intersection Observer


const visibles = document.querySelectorAll('.scroll')

const callback = (entries, observer)=>{
  entries.forEach((entrie) => {
    if(entrie.isIntersecting){
      entrie.target.classList.add('visible')
    }
  });

}

const option = {
  root: null,
  // rootMargin: '-75px 0px',
  threshold: 0.20
}

const observer = new IntersectionObserver(callback, option)
visibles.forEach(element => observer.observe(element))

// Scroll Up

const buttonUp = document.getElementById('button-up')
let scrollUp = ()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
buttonUp.addEventListener('click', scrollUp)

window.addEventListener('scroll',()=>{
  const currentScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight;
  if(currentScroll > height/6){
    buttonUp.style.transform = "scale(1)"
  }else{
        buttonUp.style.transform = "scale(0)"
  }
})

//We-Chat

const weChat = document.getElementById('we-chat')
const joinchat = document.getElementById('joinchat')

window.addEventListener('scroll',()=>{
    const currentScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight;
    if(currentScroll > height/7){
    weChat.style.transform = "scale(1)"
        joinchat.classList.add('visible')
    }else{
        weChat.style.transform = "scale(0)"
        joinchat.classList.remove('visible')
    }
})


// Cambiar valores
//
// document.querySelectorAll(".languaje").forEach(el=> el.addEventListener("click",  e => selected(el)));
//
//
//
//
//
//
// function selected(element){
//
//    const seleccionadoActual = document.getElementById("country-0");
//
//    console.log(seleccionadoActual)
//
//    if(element== seleccionadoActual) return;  // si son iguales no hacer nada
//    swap(seleccionadoActual, element);
// }
//
// //intercambiamos 2 elementos
// function swap(el1, el2) {
//     let parent2 = el2.parentNode; //variables auxiliares
//     let next2 = el2.nextSibling;
//
//     el1.parentNode.insertBefore(el2,  el1.nextSibling);
//     parent2.insertBefore(el1, next2);
// }


//El algoritmo es bastante simple, creas una función para intercambiar elementos (swap) y como toda función swap necesitas una varía auxiliar para administrar el cambio, en este caso 2. Una para apuntar al padre (parentNode) y otra para apuntar al siguiente elemento (para marcar la posición dentro del padre)


// let languajeSelect = document.getElementById('languaje-select')
// let flagSelect = document.getElementById('flag-select')
//
// let firstLanguaje = document.getElementById('languaje-1')
// let firstFlag = document.getElementById('flag-1')
//
// let secondLanguaje = document.getElementById('languaje-2')
// let secondFlag = document.getElementById('flag-2')
