function tasks(tasks){
    tasks.forEach((element) => { 
        console.log(element);
        createForm(element); 
    });
}

function createForm(element){
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    form.setAttribute("class", "tasks");

    let title = document.createElement("label");
    title.setAttribute("type", "text");
    title.innerHTML = "<b>Task Title: </b>" + element.title;

    let description = document.createElement("label");
    description.setAttribute("type", "text");
    description.setAttribute("class", "description");
    description.innerHTML = "<b>Task Description: </b>" + element.message;
    
    let createdDate = document.createElement("p");
    createdDate.setAttribute("type", "text");
    createdDate.innerHTML = "<b>Start Date: </b>" + element.createddate;

    let dueDate = document.createElement("p");
    dueDate.setAttribute("type", "text");
    dueDate.innerHTML = "<b>Due Date: </b>" + element.duedate;
   
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(createdDate);
    form.appendChild(dueDate);
    if(!element.isdone){
        document.getElementById("toDo").appendChild(form);
    }else{
        document.getElementById("completed").appendChild(form);
    }
}

/* <form class='tasks' action='./taskFunctions.php' method='POST'>	
<input type='hidden' id='task$count' name='task' value='$message'>
<label for='task$count'> <b> Task Title: </b>$message </label>
<label class='description' for='task$count'> <b> Task Description: </b>$description </label>
<p><b>Start Date: </b>$startTime </p>
<p><b>Due Date: </b>$endTime </p>
<input type='hidden' name='deleteTaskTime' value='$endTime'>
<input type='hidden' name='deleteTask' value='$message'>
<input class='btn btn-primary' name='delete' type='submit' value='Delete Task'>
<br/>
<input name='completed' class='btn btn-primary' type='submit' value='Completed'>
<br/>
</form>
<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#modifyTask$count'>
    Modify Task
</button> */