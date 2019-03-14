var test = require('tape');
var logic = require('./logic');

var currentList = [{
  id: 0,
  description: 'make smoothie out of things that should really be cooked',
  done: false,
}];

var listItem = 'make smoothie out of things that should really be cooked';

var deleteList = [{
  id: 0,
  description: 'make smoothie out of things that should really be cooked',
  done: false,
},
{
  id: 1,
  description: 'make smoothie out of things that should really be cooked',
  done: false,
}];

//Tests for addTodo function

test('first parameter remains unchanged', function (t) {
  logic.addTodo(currentList, listItem);
  const expected = [{
    id: 0,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }];
  t.deepEqual(currentList, expected, "first param should return the currentList");
  t.end();
});

test('Returns todos and a copy of todos', function (t) {
  const actual = logic.addTodo(currentList, listItem);
  const expected = [{
    id: 0,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }, {
    id: 2,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }];
  t.deepEqual(actual, expected, "new list should have two copies of the first list item");
  t.end();
});

test('newTodo Id should return new Id value', function (t) {
  const actual = logic.addTodo(currentList, listItem);
  const expected = 3;
  t.deepEqual(actual[1].id, expected, "Id for listItem should be updated");
  t.end();
});

test('testing list length', function (t) {
  const firstListResult = logic.addTodo(currentList, listItem);
  const secondListResult = logic.addTodo(firstListResult, listItem);
  const actual = secondListResult.length;
  const expected = 3;
  t.deepEqual(actual, expected, "secondListResult should have 3 items");
  t.end();
});

test('all todo items should have an 3 keys', function (t) {
  const listResult = logic.addTodo(currentList, listItem);
  let actual = true;
  listResult.forEach(function(x) {
    if(Object.keys(x).length !== 3){
      actual = false;
    }
  });
  const expected = true;
  t.deepEqual(actual, expected, "should return 3 keys");
  t.end();
});

//Tests for deleteTodo function

test('should leave input argument todos unchanged', function (t) {
  logic.deleteTodo(deleteList, 1);
  const actual = deleteList
  const expected = [{
    id: 0,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  },
  {
    id: 1,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }];
  t.deepEqual(actual, expected, "Original list remains unchanged");
  t.end();
});

test('should return an array', function (t) {
  const deleteFunc = logic.deleteTodo(deleteList, 1);
  const actual = Array.isArray(deleteFunc) ;
  const expected = true;
  t.deepEqual(actual, expected, "should return true");
  t.end();
});

test('input should not be same as output', function (t) {
  const deleteFunc = logic.deleteTodo(deleteList, 1);
  var actual = false;
  if(deleteList !== deleteFunc){
    actual = true}
    else {
      actual = false}
  const expected = true;
  
  t.deepEqual(actual, expected, "input is not the same as output");
  t.end();
});

test('item with deleteId should not exist', function (t) {
  const deleteFunc = logic.deleteTodo(deleteList, 1);
  var actual = false;
  if(deleteList !== deleteFunc){
    actual = true}
    else {
      actual = false}
  const expected = true;
  
  t.deepEqual(actual, expected, "input is not the same as output");
  t.end();
});

// Tests for markTodo

test('mark function: should leave input argument todos unchanged', function (t) {
  logic.markTodo(deleteList, 1);
  const actual = deleteList;
  const expected = [{
    id: 0,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  },
  {
    id: 1,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  }];
  t.deepEqual(actual, expected, "Original list remains unchanged");
  t.end();
});



test('in the new todo array, all elements will remain unchanged except the one with id: idToMark', function (t) {
  const actual = logic.markTodo(deleteList, 1);;
  const expected = [{
    id: 0,
    description: 'make smoothie out of things that should really be cooked',
    done: false,
  },
  {
    id: 1,
    description: 'make smoothie out of things that should really be cooked',
    done: true,
  }];
  t.deepEqual(actual, expected, "last item should have done key marked as true");
  t.end();
});