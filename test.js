var test = require('tape');
var logic = require('./logic');

var testList =  [
      {
       id: 0,
       description: 'make smoothie out of things that should really be cooked',
       done: false,
     }
   ];

test('Returns first parameter', function(t) {
  const actual =  logic.addTodo(testList);
  const expected = [
    {
     id: 0,
     description: 'make smoothie out of things that should really be cooked',
     done: false,
   }
 ];
 console.log('actual: ');
 console.log(actual);
 console.log('expected: ');
 console.log(expected);

  t.deepEqual(actual, expected, "first param should return the testList")
  //t.pass();
  t.end();
});