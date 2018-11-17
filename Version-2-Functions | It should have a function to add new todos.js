//Watch and Code Course
//Instructor: Gordon Zhu
//Student: Astra Rai
//Version 2 | Functions
//Section Objective:  It should have a function to add new todos

//create an array to store todo elements
var todos = ['item 1', 'item 2', 'item 3'];
//create a function called "displayTodos"
function displayTodos(){
  //print the text My Todos: and elements in the array named "todos"
  console.log('My Todos: ', todos);
}
//below is how to call a fuction, it will run code in-between functions {} braces
//displayTodos();
//expectd output: "My Todos: " ["item 1", "item 2", "item 3"]

//create function to add new todo


//first version of using function to add a todo
/* function addTodo(){
  //use push method to add element to array named "todos"
  todos.push('new todo');
  //after adding new new todo, run the displayTodo function
  displayTodos();
}
//call function addTodos
addTodo();
//expected output: "My Todos: " ["item 1", "item 2", "item 3", "new todo"]
addTodo();
addTodo();
*/


//Version 2 of addTodo Function
//let's customize function and add a parameter 
//write a function named addTodo, with the parameter "todo"
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}
//pass todo as an argument for the fuction addTodo, "todo" parameter
addTodo("Hello there");