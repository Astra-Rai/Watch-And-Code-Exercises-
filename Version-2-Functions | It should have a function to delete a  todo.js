//Watch and Code Course
//Instructor: Gordon Zhu
//Student: Astra Rai
//Version 2 | Functions
//Section Objective:  It should have a function to delete  a todo

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
//addTodo("Hello there");

//item that were are interested in, and want to change, target it by index position, call this parameter, position
//new value that we wamt to set selected element to, name parameter newTodo
//function change todo with two parameters
function changeTodo(position, newTodo){
  //in array named "todos", select an element by index position and assign it a new value, through the argument passed trough parameter "newTodo"
  todos[position] = newTodo;
  //run displayTodos function, function will display all elements in array named "todos"
  displayTodos();
}
//run the change todo fuction, change element at index zero's text content from "idex 1" to "changed"
changeTodo(0,'changed');
//crate a function that deletes todo based on index position
function deleteTodo(position){
  //in  array "todos", for position (index number passed as an argument through function deleteTodo, use splice method for deletion of first parameter of splice method, position) 
  todos.splice(position,1);
  //display todos array
  displayTodos();
}
//delete first element of array todos
deleteTodo(0);