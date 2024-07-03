let c = document.querySelectorAll("button")
let div = document.querySelector(".tela")
let add = 0
for(t of c){
t.addEventListener("click",(e)=>{
    let guard = div.innerHTML
    console.log(div.innerHTML += e.target.innerHTML)
    if(e.target.innerHTML == "+"){
        add = add + parseInt(div.innerHTML)
        div.innerHTML = ""
        console.log(add)
    }
    else if(e.target.innerHTML == "-"){
        add = add - parseInt(div.innerHTML)
        div.innerHTML = ""
        console.log(add)
    }
    else if(e.target.innerHTML == "="){
        div.innerHTML = add
        add = 0
    }
    
})
}
