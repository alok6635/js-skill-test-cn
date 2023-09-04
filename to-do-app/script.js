const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//localStorage.clear();

function addTask() {
  if (inputBox.value === "") {
    alert("Task can not be empty!");
  } else {
    const li = document.createElement("li");

    // Create a new checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task-checkbox";

    // Create a label element for the checkbox
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "task-checkbox");
    checkboxLabel.textContent = inputBox.value;

    // Append the checkbox and its label to the list item
    li.appendChild(checkbox);
    li.appendChild(checkboxLabel);

    // Create a button element for deleting the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "\u00d7";
    deleteButton.className = "delete-btn";

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the list container
    listContainer.appendChild(li);

    alert("Task added successfully");
  }
  inputBox.value = "";
  countTasks();
  saveData();
}

listContainer.addEventListener("click", function (event) {
  const target = event.target;

  // If the target is a checkbox or its label, toggle the "completed" class
  if (target.matches("input[type=checkbox]") || target.matches("label[for=task-checkbox]")) {
    target.closest("li").classList.toggle("completed");

    alert("Task toggled successfully");
    
  }

  // If the target is a delete button, remove the list item
  if (target.matches(".delete-btn")) {
    target.closest("li").remove();

    alert("Task deleted successfully");

    countTasks();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function countTasks() {
  const totalTasks = listContainer.querySelectorAll("li").length;
  document.getElementById("total-task").textContent = `Total Tasks: ${totalTasks}`;
}
countTasks();
