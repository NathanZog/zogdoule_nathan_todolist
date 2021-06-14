let titre = document.createElement("h1");
titre.innerText = "To Do List";
document.body.appendChild(titre)
titre.setAttribute("class", "title");

let divDouble = document.createElement("div");
divDouble.setAttribute("class","divDouble");
document.body.appendChild(divDouble);

let divInput = document.createElement("div");
divInput.setAttribute("class","input");
divDouble.appendChild(divInput);

let input = document.createElement("input");
input.setAttribute("class", "inputText");
divInput.appendChild(input);

let plusButton = document.createElement("button");
plusButton.setAttribute("class", "plus");
divInput.appendChild(plusButton);
plusButton.innerText = "+"

let divButtons = document.createElement("div");
divButtons.setAttribute("class","buttons");
divDouble.appendChild(divButtons);

let btn1 = document.createElement("button");
btn1.setAttribute("class","all");
divButtons.appendChild(btn1);
btn1.innerText = "All"

let btn2 = document.createElement("button");
btn2.setAttribute("class","todo");
divButtons.appendChild(btn2);
btn2.innerText = "To Do";

let btn3 = document.createElement("button");
btn3.setAttribute("class","done");
divButtons.appendChild(btn3);
btn3.innerText = "Done";

let divTasks = document.createElement("div");
divTasks.setAttribute("class","tasks");
document.body.appendChild(divTasks);

let divClear = document.createElement("div")
divClear.setAttribute("class", "clear");
document.body.appendChild(divClear)

let clearBtn = document.createElement("button");
clearBtn.setAttribute("class", "clearBtn");
divClear.appendChild(clearBtn);
clearBtn.innerText = "CLEAR ALL"





export{titre,divDouble,divInput,divButtons,input,plusButton,btn1,btn2,btn3,divTasks,divClear,clearBtn}





