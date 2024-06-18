// Function to create a new todo item
function createTodoItem(task) {
    let li = document.createElement('li');
    let todoLabel = document.createElement('label');
    let checkBoxInput = document.createElement('input');
    let labelSpan = document.createElement('span');
    let updateBtn = document.createElement('button');

    // Append elements to the list item
    todoList.appendChild(li);
    li.className = "d-flex justify-content-between";
    li.appendChild(todoLabel);

    todoLabel.className = "todo-item";
    todoLabel.appendChild(checkBoxInput);
    todoLabel.appendChild(labelSpan);

    checkBoxInput.type = 'checkbox';
    checkBoxInput.className = "complete-task";
    checkBoxInput.addEventListener('change', function () {
        if (checkBoxInput.checked) {
            completeTaskList.appendChild(li); // Move the task to the completed task list
            checkBoxInput.remove(); // Remove the checkbox input
        }
    });

    labelSpan.textContent = task;

    updateBtn.className = "btn btn-info py-1 text-capitalize";
    updateBtn.textContent = 'update';
    li.appendChild(updateBtn);
}

// Function to handle adding a new task
function newTaskItem() {
    let task = newTask.value;
    if (task.trim() !== '') { // Check if the task is not empty
        createTodoItem(task);
        newTask.value = ''; // Clear the input field after adding the task
    }
}

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    newTaskItem(); // Call the function to add a new task
});

// Event listener for add task button click
addTaskButton.addEventListener('click', newTaskItem);

// Reference to the completed task list
let completeTaskList = document.getElementById('completed-tasks');
