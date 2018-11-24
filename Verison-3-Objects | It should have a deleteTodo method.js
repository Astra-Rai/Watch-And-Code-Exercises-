//Watch and Code Course
//Instructor: Gordon Zhu
//Student: Astra Rai
//Version 1 | Objects
//Section Title: It should have a deleteTodo method
 //Exericse
 /*
In the past version, we used the following function to diplay 
the todos array, let's use this a blueprint for storing
the todos array on an object
 var todos = ['item 1 ','item 2','item 3'];
 function displayTodos(){
  console.log('My todos', todos);
}
 displayTodos();
//expected output;
"My todos" ["item 1 ", "item 2", "item 3"]
*/
 //todoList, object
var todoList = {
  //todos array 
  todos: ['item 1','item 2','item 3'], 
  //Anonymous function. Will use property name instead of function name. 
  //we need to refer to todos property on object using dot notation
  displayTodos: function(){
    console.log('My Todos', this.todos);
  },
  
  changeTodo:function (position, newValue) {
  this.todos[position] = newValue;
  this.displayTodos();
  },

  deleteTodo: function (position){
      this.todos.splice(position, 1);
      this.displayTodos();

  }  
};



//changeTodo(1, "Star");
//console.log(displayTodos);
//use dot notation to target displayTodos() function  
//todoList.displayTodos();
//expected output: 

/*
//fuction from version 2 to change a todo
//function change todo with two parameters
function changeTodo(position, newTodo){
  //in array named "todos", select an element by index position and assign it a new value, through the argument passed trough parameter "newTodo"
  todos[position] = newTodo;
  //run displayTodos function, function will display all elements in array named "todos"
  displayTodos();
}

*/