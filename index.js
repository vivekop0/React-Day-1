const state ={
    count:0,
}

function onButtonPress(){
    state.count++
    buttonComponentRender()
}

function buttonComponentRender(){
   const constainer = document.querySelector(".container").innerHTML =" "
   const componet = createButton(state.count)
   document.querySelector('.container').appendChild(componet)
   
}

function createButton(count){
    const button = document.createElement("button")
    button.innerHTML = `count ${count}`

    button.setAttribute('onclick','onButtonPress()')
return button
}
buttonComponentRender()