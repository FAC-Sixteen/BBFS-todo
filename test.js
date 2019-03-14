var test = require('tape');
var logic = require('./logic');

var currentList =  [
      {
       id: 0,
       description: 'make smoothie out of things that should really be cooked',
       done: false,
     }
   ];

var listItem =  'make smoothie out of things that should really be cooked';

test('first parameter remains unchanged', function(t) {
  logic.addTodo(currentList, listItem);
  
  const expected = [
    {
     id: 0,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }
 ];
 
  t.deepEqual(currentList, expected, "first param should return the currentList")
  //t.pass();
  t.end();
});

test('Returns todos and a copy of todos', function(t) {
  const actual =  logic.addTodo(currentList, listItem);
  const expected = [
    {
     id: 0,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }, {
    id: 2,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }
 ];

  t.deepEqual(actual, expected, "new list should have two copies of the first list item")
  //t.pass();
  t.end();
});

test('newTodo Id should return new Id value', function(t) {
  const actual = logic.addTodo(currentList, listItem);
  const expected = 3;
 // console.log(testTodo);

  t.deepEqual(actual[1].id, expected, "Id for listItem should be updated")
  //t.pass();
  t.end();
});

test('testing list length', function(t) {
  const firstListResult = logic.addTodo(currentList, listItem);
  const secondListResult = logic.addTodo(firstListResult, listItem);
  const actual = secondListResult.length
  const expected = 3;
 // console.log(testTodo);

  t.deepEqual(actual, expected, "secondListResult should have 3 items")
  //t.pass();
  t.end();
});