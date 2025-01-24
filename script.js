document.addEventListener("DOMContentLoaded", () => {
  // Select the input, button, and list elements
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Load tasks without saving them again
  }

  // Function to save tasks to Local Storage
  function saveTasks() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((taskItem) => {
      return taskItem.firstChild.textContent.trim(); // Extract task text
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // Check if input is not empty
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item and set its text content
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add an event listener to the remove button
    removeButton.onclick = () => {
      taskList.removeChild(taskItem);
      saveTasks(); // Update Local Storage after removal
    };

    // Append the button to the list item and the list item to the task list
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Save to Local Storage if applicable
    if (save) {
      saveTasks();
    }

    // Clear the input field
    taskInput.value = "";
  }

  // Add event listeners for button click and Enter key
  addButton.addEventListener("click", () => addTask(taskInput.value));
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();
});
