const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];
toDos.append

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

 function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newToDo;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    saveToDos();
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(element => {
        console.log("this is the turn of", element);
    });
}