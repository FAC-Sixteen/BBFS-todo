// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = todo.description;
    todoNode.appendChild(span);


    // you will need to use addEventListener
 
    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.classList.add("markbutton");
    markTodoButtonNode.setAttribute('id', todo.id);
    markTodoButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      activebutton(newState);
    });
    todoNode.appendChild(markTodoButtonNode);

    // add classes for css

    return todoNode;
  };

   // you CANNOT change this function
   var update = function(newState) {
  
    state = newState;
    renderState(state);
  };

  var activebutton = function (todo) {
  todo.map(function (x) {
      let el = document.getElementById(x.id);
      if (x.done === true) {
        el.classList.add('active');
      }
    })
  }

  

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      event.preventDefault();
      // what is inside event.target?
      console.log(event);
      var description = document.getElementById('input').value; // event.target ....
      document.getElementById('input').value = "";
      // hint: todoFunctions.addTodo
      
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
      console.log(state);
    });
  }

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();