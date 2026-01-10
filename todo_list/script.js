const taskInput = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
const btn = document.getElementById("addTask");
let task = [];

const store = localStorage.getItem("taskList");
if (store != null) {
  let data = JSON.parse(store);
  task = data;
  displayTask();
}

btn.addEventListener("click", () => {
  let query = taskInput.value;
  console.log(taskInput.value);
  if (taskInput.value === "") return alert("no task entered");
  taskInput.value = "";
  task.push(query);
  displayTask();
  storeTask();
});

function displayTask() {
  taskList.innerHTML = "";
  task.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span>
        <div class="actions">
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
          </div>`;
    taskList.appendChild(li);
  });
}

const deleteTask = (index) => {
  task.splice(index, 1);
  storeTask();
  window.location.reload();
};

const editTask = (index) => {
  const updatedTask = prompt("Edit task:", task[index]);
  if (updatedTask !== null && updatedTask.trim() !== "") {
    task[index] = updatedTask.trim();
    storeTask();
    window.location.reload();
  }
};

function storeTask() {
  localStorage.setItem("taskList", JSON.stringify(task));
}
