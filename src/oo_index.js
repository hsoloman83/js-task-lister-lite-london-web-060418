
//wait until the dom is fully loaded to run the following js file
document.addEventListener("DOMContentLoaded", () => {
  // creating constant variables that cannot be changed

  // taskList is a new instantiation of the constructor function
  //taskList in tastList.js file
  const taskList = new TaskList();
  //task-form is creating a constant variable and equalling its value
  //to that of items in the document with an id of 'create-task-form'
  const taskForm = document.querySelector('#create-task-form');
  //create constant variable called taskContainer equal to the value of
  //anything inside the document with an id of tasks.
  const taskContainer = document.querySelector('#tasks');


  //adding an event listener to submit input button, which does the following
  //callback function which prevents its default action and instead runs
  //the fuction submitTask
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    submitTask();
  });


  function submitTask() {
    // create let variable that can be reassigned to select items in doc
    //that have the id of new-task-description
    let taskDescription = document.querySelector("#new-task-description");
    // create let variable that runs the task constructor function
    //the argument is the value of a string called task description
    let task = new Task(taskDescription.value);
    //using the add function in taskList adding the task to the list
    taskList.add(task);
    //the argument of task constructor function is an empty string
    taskDescription.value = "";
    //then refresh the task with the new submitted task added to it
    refreshTasks();
    console.log(taskList.all);
  }


  //
  function refreshTasks() {
    //create variable which selects all items in the doc with
    //a class of task-item
    let activeTasks = document.querySelectorAll('.task-item');
    //for each task in activeTasks remove task
    activeTasks.forEach(task => task.remove());
    //for each item in tasklist create a task item
    taskList.all.forEach(task => createTaskItem(task));
  }

  function createTaskItem(task) {
    //add task.listitem function to task container
    taskContainer.appendChild(task.listItem());
    //create button variable selecting the description of the tasks
    let button = document.querySelector(`[data-description = '${task.text}']`);
    //add an event listenerfor when the button is clicked, with the
    //callback function which then deletes the task on when its clicked.
    button.addEventListener("click", function(event) {
      taskList.delete(task);
      refreshTasks();
    })
  }

});
