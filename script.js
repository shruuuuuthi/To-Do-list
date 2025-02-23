document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskinput");
    const addTaskBtn = document.getElementById("addtaskbtn");
    const taskList = document.getElementById("tasklist");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">🗑</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });
    }

    addTaskBtn.addEventListener("click", addTask);
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            const tasks = document.querySelectorAll("li");
            
            tasks.forEach(task => {
                switch (filter) {
                    case "all":
                        task.style.display = "flex";
                        break;
                    case "completed":
                        task.style.display = task.classList.contains("completed") ? "flex" : "none";
                        break;
                    case "pending":
                        task.style.display = !task.classList.contains("completed") ? "flex" : "none";
                        break;
                }
            });
        });
    });
});