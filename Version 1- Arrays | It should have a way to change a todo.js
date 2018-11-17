


 //Watch and Code Course
//Instructor: Gordon Zhu
//Student: Astra Rai
//Version 1 | Array
//Section Objective: It should have a way to change a todo 

//Change a element in an array by targeting it to that element and then resigning the value

//starting array 
//objective: change an existing todos item
var todos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
//we can change item in an array, by targeting its index
//arrays start at 0 idex
//item 1 = index 0
//item 2 = index 1

console.log(todos[0]);
//expected output: "item 1"

//change text content at 0 index, this is 'item one'

todos[0] ='item 1 updated';
console.log(todos)
//expected output:
//["item 1 updated", "item 2", "item 3", "item 4", "item 5"]