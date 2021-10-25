/*this function gets the task from input*/
function get_todos() {
    var todos =new Array; //this creates and aray of tasks that are outputed//
    var todos_str = localStorage.getItem('todo')//this pullls task the was saved in local storage on web browser//
    if (todos_str !== null) {//it the inputis not null the JSON.parsewill communicate with web browser//
        todos = JSON.parse(todos_str);//to make task a JavaScript object
    }
    return todos;//returns from local storage the todo
}
// this function adds the inputed task to  the get_todos function array//
function add() {
    // this takes theinputed task and creates a varriaible out of it//
    var task = document.getElementById('task').value;
    var todos= get_todos();
    // this adds a new task to the end of the array//
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));// this convert to json string
    document.getElementById("task").value = "";
    show();
    return false;
}

//thi s functione keep the task permenetly displayed on the screen
function show() {
    //this sets the task that was retrieved as a variable//
    var todos = get_todos();
    // this sets up each task as an unordered list
    var html = '<ul>';
    ///this displays a task to the list in athe order that it is inputed
for (var i = 0; i < todos.length; i ++) {
    // this also displays the task as a list and creates the buttin with the x
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

};
html += '</ul>';
//this displays the task as a list
}

document.getElementById('add').addEventListener('click', add);
//this will keep the inputs dislpayed permently on the screen
show();

function removeTask() { ///naming function of the action remove, allowing to remove items
var id = this.getAttribute('id') // get the id afte naming the x buttonts Xbutton
var todos = get_todos(); // converts todos variable into the previous get_todos function
todos.splice(id, 1);//spliced the xbutton and the index togeth
lacalStorage.setItem('todo', JSON.stringify(todos));// goes to local storage to get todo items then convert to string call todos
show();/// call the show function

return false/// set show to false
}

var buttons = documents.getElementByClassName('remove');
for (var i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', remove);

};