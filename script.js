let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

let task=document.getElementById("task").value;

let date=document.getElementById("date").value;

let time=document.getElementById("time").value;

if(task==""){

alert("Enter Task");

return;

}

tasks.push({

task,

date,

time,

completed:false

});

saveTasks();

displayTasks();

document.getElementById("task").value="";

document.getElementById("date").value="";

document.getElementById("time").value="";

}

function displayTasks(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((item,index)=>{

let li=document.createElement("li");

if(item.completed)

li.classList.add("completed");

li.innerHTML=`

<div class="task-info">

<h3>${item.task}</h3>

<p>Date : ${item.date}</p>

<p>Time : ${item.time}</p>

</div>

<div class="actions">

<button class="complete" onclick="completeTask(${index})">✓</button>

<button class="edit" onclick="editTask(${index})">Edit</button>

<button class="delete" onclick="deleteTask(${index})">Delete</button>

</div>

`;

list.appendChild(li);

});

}

function completeTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function editTask(index){

let newTask=prompt("Edit Task",tasks[index].task);

if(newTask!=null && newTask!=""){

tasks[index].task=newTask;

saveTasks();

displayTasks();

}

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}
