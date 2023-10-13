// Функция для добавления новой задачи
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Пожалуйста, введите задачу.");
        return;
    }

    // Создаем новый элемент списка
    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;

    // Добавляем кнопку для удаления задачи
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function() {
        taskList.removeChild(taskItem);
    };

    // Добавляем элементы в список
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = "";
}

// Пример добавления события для клавиши "Enter"
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
