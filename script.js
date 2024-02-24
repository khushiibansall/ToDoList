const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
        return;
    }
    const priority = prompt("Enter the priority of the task (low, medium, high):");
    let liColor = '';
    switch (priority.toLowerCase()) {
        case 'low':
            liColor = '#d9ebfa';
            break;
        case 'medium':
            liColor = '#a0d0f7';
            break;
        case 'high':
            liColor = '#64b4f5';
            break;
        default:
            alert("Invalid priority. Setting priority to low.");
            liColor = '#d9ebfa';
    }
    
        let li = document.createElement("li");
        li.style.backgroundColor = liColor;
        li.innerHTML = `<p class="task-name">${inputBox.value}</p> <button class="edit-btn">Edit</button> `;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    
    inputBox.value='';
    saveData();
    const editBtn = li.querySelector('.edit-btn');
    const taskName = li.querySelector('.task-name');

    editBtn.addEventListener('click', () => {
         
        const newTaskName = prompt('Enter the new task name:');
        if (newTaskName === null || newTaskName === '') {
            return;
        }
        taskName.textContent = newTaskName;
        saveData();
    });
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();