document.addEventListener("DOMContentLoaded", () => {
  // Select the input, button, and list elements
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Retrieve and trim user input
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item and set its text content
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // Use setAttribute instead of classList.add

    // Add an event listener to the remove button
    removeButton.onclick = () => {
      taskList.removeChild(taskItem);
    };

    // Append the button to the list item and the list item to the task list
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Add event listeners for button click and Enter key
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
