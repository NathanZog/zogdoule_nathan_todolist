import {titre,divDouble,divInput,divButtons,input,plusButton,btn1,btn2,btn3,divTasks,divClear,clearBtn} from "./structure.js";


plusButton.addEventListener("click",() =>{
    let elemToDo = document.createElement("div");
    elemToDo.setAttribute("class", "thing")
    let input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("class", "monInp");
    let elem = document.createElement("p");
    elem.innerText = input.value;
    let button1 = document.createElement("button");
    button1.setAttribute("class","img1");
    button1.innerHTML = '<i class="fas fa-edit"></i>'
    let button2 = document.createElement("button");
    button2.setAttribute("class","img2");
    button2.innerHTML = '<i class="fas fa-trash"></i>'
    elemToDo.appendChild(input1)
    elemToDo.appendChild(elem)
    elemToDo.appendChild(button1)
    elemToDo.appendChild(button2)
    divTasks.appendChild(elemToDo);
    input.value = "";

    btn2.addEventListener("click", () => {
        if (input1.checked == false){
            elemToDo.style.display = "flex";
        } else {
            elemToDo.style.display = "none";
            
        }
    });

    btn3.addEventListener("click", () => {
        if (input1.checked == true){
            elemToDo.style.display = "flex";
        } else {
            elemToDo.style.display = "none";
        }
    });

    btn1.addEventListener("click", () => {
        if (input1.checked == true || input1.checked == false){
            elemToDo.style.display = "flex";
        }
    });

    button1.addEventListener("click", () =>{
        elem.innerText = "";
        let newinput = document.createElement("input");
        elemToDo.appendChild(newinput);
        newinput.addEventListener("keyup", (e) =>{
            if(e.keyCode == 13){
                elem.innerText = newinput.value
                newinput.remove()
            }
        })
    });

    button2.addEventListener("click",() =>{
        elemToDo.remove()
    })
})

input.addEventListener("keyup",(e)=>{
    if(e.keyCode == 13){
    let elemToDo = document.createElement("div");
    elemToDo.setAttribute("class", "thing")
    let input1 = document.createElement("input");
    input1.setAttribute("type", "checkbox");
    input1.setAttribute("class", "monInp");
    let elem = document.createElement("p");
    elem.innerText = input.value;
    elem.setAttribute("class","elem")
    let button1 = document.createElement("button");
    button1.setAttribute("class","img1");
    button1.innerHTML = '<i class="fas fa-edit"></i>'
    let button2 = document.createElement("button");
    button2.setAttribute("class","img2");
    button2.innerHTML = '<i class="fas fa-trash"></i>'
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