const Task = document.getElementById("Task");
const textarea = document.getElementById("textarea");
const tasklist = document.getElementById("tasklist");

function AddTask() {
  if (Task.value === "" || textarea.value === "") {
    alert("Empty Task!!!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = Task.value + " : " + textarea.value;
    tasklist.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  Task.value = "";
  textarea.value = "";
  saveTask();
}

tasklist.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

function saveTask() {
  localStorage.setItem("data", tasklist.innerHTML);
}
function showTask() {
  tasklist.innerHTML = localStorage.getItem("data");
}
showTask();
