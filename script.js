btn = document.querySelector('#btn');
todo = document.querySelector('input');
tasks = document.querySelector('#tasks');


todo.addEventListener('keyup', function(event){
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btn.click();
    }
});


btn.addEventListener('click', function(){
    text = todo.value
    addToDo(text);
    var currentTask = document.querySelectorAll('.delete');
    var task = document.querySelectorAll('.task');
    delete_bar(currentTask, task);
    document.querySelector('#newTask input').value = ''
});


function addToDo(input){
    
    if (input.length == 0){
        alert('Write down a Todo aayesh eziin :p')
    }
    else{
        tasks.innerHTML = `
        <div class = 'task'>
            <span id = 'taskname'>
                ${input}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
     ` + tasks.innerHTML ;
    }
}

function delete_bar(taskToDelete,taskToBar ){
    for (i = 0; i < taskToDelete.length; i++){
        taskToDelete[i].addEventListener('click', function(){
            this.parentNode.remove();
            
        });
    }

    for (j = 0; j < taskToBar.length; j++){
        taskToBar[j].addEventListener('click', function(){
            this.classList.toggle('completed');
        });
    }
}
