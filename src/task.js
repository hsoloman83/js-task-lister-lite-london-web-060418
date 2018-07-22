class Task {
  constructor(text) {
    //constructor function to create the object task
    this.text = text
  }

  listItem(){
    //create let variable to be able to reassign later
    //equal to creating a new html element dynamically called 'li'
    let li = document.createElement("li");
    //set the inner text/content of the <li></li> to be whatever
    //argument is given in this text.
    li.innerText = this.text;
    //go to li and change the attribute/value of class to task-item
    li.setAttribute("class", "task-item");
    //create a let variable to craete the element button in the document
    let button = document.createElement("button");
    //change button attribute of data-description to this.text
    button.setAttribute("data-description", this.text);
    //set the inner text of button to "x"
    button.innerText = "x"
    //attach the button to the li element
    li.appendChild(button);
    //return the new list item element with the added button
    return li;

  }

}
