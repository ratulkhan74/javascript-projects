const form = document.getElementById('todo-form');
const newTask = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');
const completedTaskList = document.getElementById('complete-task');

let completedTaskItem = document.querySelectorAll('input[type="checkbox"]');

function createTodoItem(task) {
    let li = document.createElement('li');
    let todoLabel = document.createElement('label');
    let checkBoxInput = document.createElement('input');
    let labelSpan = document.createElement('span');
    let updateBtn = document.createElement('button');
    todoList.appendChild(li);
    li.className = "d-flex justify-content-between";
    li.appendChild(todoLabel);

    todoLabel.className = "todo-item";
    todoLabel.appendChild(checkBoxInput);
    todoLabel.appendChild(labelSpan);

    checkBoxInput.type = 'checkbox';
    checkBoxInput.className = "complete-task";

    labelSpan.textContent = task;

    updateBtn.className = "btn btn-info py-1 text-capitalize";
    updateBtn.textContent = 'update';
    li.appendChild(updateBtn);
}

function addNewTask() {
    let task = newTask.value;
    if (task.trim() !== '') {
        createTodoItem(task);
        newTask.value = '';
    }
}

// function conpletedItem(e) {
//     let label = e.target.parentNode;
//     let li = label.parentNode;
//     if (e.target.checked) {
//         completedTaskList.appendChild(li);
//         completedTaskItem.remove();
//     }
// }

for (let i = 0; i < todoList.children.length; i++){
    todoList.children[i].addEventListener('click', function(e){
        let li = todoList.children[i];
        completedTaskList.appendChild(li);
        let lable = li.children;
        console.log(lable.children);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    addNewTask();
});
