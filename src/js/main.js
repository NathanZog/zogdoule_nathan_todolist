import {titre,divDouble,divInput,divButtons,input,plusButton,btn1,btn2,btn3,divTasks,divClear,clearBtn} from "./structure.js";


plusButton.addEventListener("click",() =>{
    let elemToDo = document.createElement("div");
    elemToDo.setAttribute("class", "thing")
    let input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    let elem = document.createElement("p");
    elem.innerText = input.value;
    let button1 = document.createElement("button");
    button1.setAttribute("class","img1")
    let button2 = document.createElement("button");
    button2.setAttribute("class","img2");
    elemToDo.appendChild(input1)
    elemToDo.appendChild(elem)
    elemToDo.appendChild(button1)
    elemToDo.appendChild(button2)
    divTasks.appendChild(elemToDo);
    input.value = "";
})

input.addEventListener("keyup",(e)=>{
    if(e.keyCode == 13){
    let elemToDo = document.createElement("div");
    elemToDo.setAttribute("class", "thing")
    let input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("class", "monInp")
    let elem = document.createElement("p");
    elem.innerText = input.value;
    elem.setAttribute("class","elem")
    let button1 = document.createElement("button");
    button1.setAttribute("class","img1")
    let button2 = document.createElement("button");
    button2.setAttribute("class","img2");
    elemToDo.appendChild(input1)
    elemToDo.appendChild(elem)
    elemToDo.appendChild(button1)
    elemToDo.appendChild(button2)
    divTasks.appendChild(elemToDo);
    input.value = "";
    }
});

clearBtn.addEventListener("click", () =>{
    divTasks.innerHTML = ""
})