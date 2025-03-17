window.addEventListener("load",loadTasks);
function add(){
   
    const listContainer=document.getElementById("list-container");
    const text=document.getElementById("text");
    const val=text.value;
   if(val!=""){
    const li=document.createElement("li");
   const span=document.createElement("span");
   span.innerText=val
    const completebtn=document.createElement("button");
    completebtn.innerHTML="Completed";
    completebtn.classList.add("completed");
    completebtn.onclick=function(){
        span.classList.toggle("completed-task");
        completebtn.classList.toggle("completed-task");
        saveTasks();
    } 
     const deletebtn=document.createElement("button");
     deletebtn.innerHTML="Delete";
     deletebtn.classList.add("delete");
     deletebtn.onclick=function(){
        listContainer.removeChild(li);
        saveTasks();
     }
     const btncont=document.createElement("div");
     btncont.classList.add("button-group");
     btncont.appendChild(completebtn);
     btncont.appendChild(deletebtn);
     li.appendChild(span);
    li.appendChild(btncont);
    listContainer.appendChild(li);
    text.value="";
    saveTasks();
}else{
    alert("you must write something");
}


}
function saveTasks(){
    const tasks=[];
    document.querySelectorAll("#list-container li").forEach(li =>{
        const taskText =li.querySelector("span").innerText;
        const iscompleted = li.querySelector("span").classList.contains("completed-task");
        tasks.push({text:taskText,completed:iscompleted});
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function loadTasks(){
    const savedTasks=JSON.parse(localStorage.getItem("tasks")) ||[];
    const listContainer=document.getElementById("list-container");
    savedTasks.forEach(tasks =>{
        const li=document.createElement("li");
        const span=document.createElement("span");
        span.innerText=tasks.text;
        if(tasks.completed){
            span.classList.add("completed-task");
        }
        const completebtn=document.createElement("button");
        completebtn.innerHTML="Completed";
        completebtn.classList.add("completed");
        completebtn.onclick=function(){
            span.classList.toggle("completed-task");
            completebtn.classList.toggle("completed-task");
            saveTasks();
        } 
         const deletebtn=document.createElement("button");
         deletebtn.innerHTML="Delete";
         deletebtn.classList.add("delete");
         deletebtn.onclick=function(){
            listContainer.removeChild(li);
            saveTasks();
         }
         const btncont=document.createElement("div");
         btncont.classList.add("button-group");
         btncont.appendChild(completebtn);
         btncont.appendChild(deletebtn);
         li.appendChild(span);
        li.appendChild(btncont);
        listContainer.appendChild(li);
    });
}