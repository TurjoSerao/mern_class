const taskForm = document.getElementById("taskForm");
const taskInput = taskForm.querySelector("input");
const addBtn = taskForm.querySelector("button");
const showTask = document.getElementById("showtask");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "flex justify-between items-center";

  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="aspect-square cursor-pointer bg-green-600 text-white mt-1 hover:bg-green-200">
        <i class="fa-solid fa-check"></i>
      </button>
      <button class="aspect-square cursor-pointer bg-red-600 text-white hover:bg-red-300 mt-1">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `;

  showTask.appendChild(li);
  taskInput.value = "";
});

showTask.addEventListener("click", (e) => {
  const target = e.target;

  // ✅ Handle complete button
  if (target.closest(".bg-green-600")) {
    const taskItem = target.closest("li").querySelector("span");
    taskItem.classList.toggle("line-through");
    taskItem.classList.toggle("text-gray-400");
  }

  // ✅ Handle delete button
  if (target.closest(".bg-red-600")) {
    target.closest("li").remove();
  }
});


localStorage.setItem("turjo", "jfndsnjodscdsojmodcs");