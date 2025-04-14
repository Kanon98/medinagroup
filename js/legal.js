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
