//Watch and Code Course
//Instructor: Gordon Zhu
//Student: Astra Rai
//Version 1 | Objects
//Section Title: It should store teh todo array on an object


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
  }  
}
//use dot notation to target displayTodos() function  
todoList.displayTodos();
//expected output: