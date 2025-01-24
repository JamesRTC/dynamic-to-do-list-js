document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    // Retrieve and trim the task input value
    const taskText = taskInput.value.trim();

    // Check if the task input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add an onclick event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(taskItem);
    };

    // Append the remove button to the task item
    taskItem.appendChild(removeButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the task input field
    taskInput.value = "";
  }

  // Add event listener to the Add Task button
  addButton.addEventListener("click", addTask);

  // Add event listener for 'Enter' key press on the task input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
