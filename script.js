// Get the task input field, add task button, and task list
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add event listener to the add task button
addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        // Create a new task element
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskList.innerHTML += `<li>${task}</li>`;
        taskInput.value = '';
    }
});

