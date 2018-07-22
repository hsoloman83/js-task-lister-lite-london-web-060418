class TaskList {
  constructor() {
    //create a constructor function
    this.all = [];
  }

  add(task){
    //add a task to the task list
    this.all.push(task);
  }

  delete(task){
    //indexOf built in string method that finds the
    //position of the first found or current specified text inside a string

    //looks for the position of the argument you've passed it and
    //returns where the specific word/argument is in your string.
    let index = this.all.indexOf(task);
    //then remove this element starting at index and
    //ending at one so just taking one element out
    this.all.splice(index, 1);
  }
}
