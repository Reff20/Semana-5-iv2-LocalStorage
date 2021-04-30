
const background = document.getElementById('background')

changeColor()

document.querySelector('#att').addEventListener('click', function () {
    const color1 = document.getElementById('color1').value
    const color2 = document.getElementById('color2').value
    const num = document.getElementById('deg').value
    const txtColor = document.getElementById('fontColor').value
    const values = new Object({
        color1,
        color2,
        num,
        txtColor
    })
    if(values.num == '' || values.num == null || values.num == undefined){
        values.num = '90'
        localStorage.setItem('values', JSON.stringify(values));
    }else{
        localStorage.setItem('values', JSON.stringify(values));
    }
    changeColor()
    console.log(values);
})


function changeColor() {
    background.style.transition = '0s'
    let parseLocalStorage = JSON.parse(localStorage.getItem('values'))
    if (localStorage.getItem('values') == null) {
        background.style.transition = '5s'
        background.style.backgroundImage = `linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)`
    } else {
        background.style.transition = '5s'
        background.style.backgroundImage = `linear-gradient(${parseLocalStorage.num}deg,${parseLocalStorage.color1},${parseLocalStorage.color2})`
    }
}

document.querySelector('#clear').addEventListener('click', function () {
    let parseLocalStorage = JSON.parse(localStorage.getItem('values'))
    localStorage.removeItem("values")

    if (localStorage.getItem('values') == null) {
        // background.style.transition = '5s'
        background.style.backgroundImage = `linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)`
    } else {
        // background.style.transition = '5s'
        background.style.backgroundImage = `linear-gradient(${parseLocalStorage.num}deg,${parseLocalStorage.color1},${parseLocalStorage.color2})`
    }
    document.querySelector('h3').innerHTML = ''
    document.querySelector('textarea').value = ''
    document.getElementById('deg').value = ''
})

document.getElementById('deg').addEventListener('blur', function () {
    let input = document.getElementById('deg')
    if (input.value > 360) {
        input.value = 360
    } else if (input.value < 0) {
        input.value = 0
    }
})

document.getElementById('fontColor').addEventListener('blur', () => {
    let color = document.getElementById('fontColor').value
    let h3 = document.querySelector('h3')
    h3.style.color = color
})

document.querySelector('textarea').addEventListener('keyup', function () {
    let parseLocalStorage = JSON.parse(localStorage.getItem('values'))
    let h3 = document.querySelector('h3')
    let txt = document.querySelector('textarea')
    h3.innerHTML = txt.value
    if (localStorage.getItem('values') != null) {
        h3.style.color = parseLocalStorage.txtColor
    } else {
        h3.style.color = document.getElementById('fontColor').value
    }
})