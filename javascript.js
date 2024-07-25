function addTask()
{
    var taskInput = document.getElementById("addtask");
    if(taskInput.value == "") { 
        alert('Please enter a valid task');
        return false;
        } 
        else {
            var taskList = document.getElementById("taskList");
             var newTask = document.createElement("li");
             newTask.textContent = taskInput.value;
             taskList.appendChild(newTask);
             taskInput.value = "";
        }
}
