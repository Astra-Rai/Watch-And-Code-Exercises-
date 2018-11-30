var todoList = {
    todos: [],
   //todos: ['item 1', 'item 2', 'item 3'],
  //get rid of items in existing array, we will add objects instead of simply text values 
    displayTodos: function() {
    console.log('My Todos', this.todos);
},
    
    addTodo: function(todoText) {
    //first todoText, is the name on the property of object
    //name of property.todoText     
      //todoText, is whatever the user passes in 
      this.todos.push({
        todoText: todoText,
        completed: false
    //first completed property, 
      //the todosText, the one after after equals sign is referring to the todoText that is paddes as a parameter 
    });     
      
      this.displayTodos();
  },
  
    changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();   
  
  },
  
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }   
};

//Notes for exercise 

//changing the addTodo method to add objects instead of text to our addTodos array
//we want to store more/represent more completed data with different properties 

//first property, todo test, will be equal to a text value
//todoText = 'item 1'

//second property will tell us if it's completed or not

//a good way to do this, is through a boolean value: true of false
//todo is either complete or not, when you first add todo, it's by default is false
//complete text, item 2