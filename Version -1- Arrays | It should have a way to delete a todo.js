








//array exercises starts with the following
var todos = ['item 1 uploaded', 'item 2', 'item 3', 'item 4', 'item 5'];

//delete an element from the array using the splice method
//splice methods has three parameters(item index to delete, how many deleting while ascending through the array, elements to add to the array)
//note: in this example, no elements are added

//delete first item of array
todos.splice(0,1);
//when the above is enter in console, the element deleted is returned
//return: ["item 1 uploaded"]

//console.log(todos);
//expected output: ["item 2", "item 3,", "item 4", "item 5"]

todos.splice(3,1);
console.log(todos);
//expected output: ["item 2", "item 3", "item 4"]