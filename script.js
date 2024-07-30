const todolist =  document.getElementById("todolist");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click",()=>{

    const newTodoText = newTodoInput.value;

    if(newTodoInput!==""){
        const newTodoItem = document.createElement("li");
        newTodoInput.innerText = newTodoText;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";

        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click", function(){
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todolist.appendChild(newTodoItem);
        newTodoInput.value = "";
    }
});