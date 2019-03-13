var test = require('tape');
var logic = require('./logic');

var testList =  [
      {
       id: 0,
       description: 'make smoothie out of things that should really be cooked',
       done: false,
     }
   ];

var secondTestList =  [
    {
     id: 0,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }
 ];

test('first parameter remains unchanged', function(t) {
  logic.addTodo(testList, secondTestList);
  
  const expected = [
    {
     id: 0,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }
 ];
 
  t.deepEqual(testList, expected, "first param should return the testList")
  //t.pass();
  t.end();
});

test('Returns todos and a copy of todos', function(t) {
  const actual =  logic.addTodo(testList, secondTestList);
  const expected = [
    {
     id: 0,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }, {
    id: 0,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }
 ];

  t.deepEqual(actual, expected, "new list should have two copies of the first list item")
  //t.pass();
  t.end();
});

test('newTodo Id should return new Id value', function(t) {
  logic.addTodo(testList, secondTestList)
  console.log(secondTestList[0].id)
  const expected = [
    {
     id: 3,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }
 ];
 
  t.deepEqual(secondTestList, expected, "Id for secondTestList should be updated")
  //t.pass();
  t.end();
});