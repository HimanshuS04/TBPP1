// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.className = "update-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Update Task
    updateBtn.addEventListener("click", () => {
        const updatedText = prompt("Update your task:", taskContent.textContent);
        if (updatedText !== null && updatedText.trim() !== "") {
            taskContent.textContent = updatedText.trim();
        }
    });

    // Delete Task
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(updateBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear input field
});
