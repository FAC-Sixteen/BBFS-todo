// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(() => {
  // This is the dom node where we will keep our todo
  let container = document.getElementById('todo-container');
  let addTodoForm = document.getElementById('add-todo');

  let state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  let createTodoNode = todo => {
    let todoNode = document.createElement('li');
    // let span = document.createElement('span');
    // span.textContent = todo.description;
    // todoNode.appendChild(span);
    if (todo.done == true) {
      todoNode.classList.add('complete');
    }

    //creating description container
    let descriptionContainer = document.createElement('span'); 
    descriptionContainer.classList.add('description-container');
    descriptionContainer.textContent = todo.description;
    todoNode.appendChild(descriptionContainer);

    //creating a button container
    let buttonContainer = document.createElement('span');
    todoNode.appendChild(buttonContainer);
    buttonContainer.classList.add('button-container');


    // you will need to use addEventListener
 
    // add span holding description

    // this adds the delete button

    let deleteButtonNode = document.createElement('button');
    deleteButtonNode.classList.add('delete-button');
    deleteButtonNode.addEventListener('click', event => {
      let newState = todoFunctions.deleteTodo(state, todo.id);

      update(newState);
      activebutton(newState);
    });
    buttonContainer.appendChild(deleteButtonNode);

    // add markTodo button

    let markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.classList.add("markbutton");
    markTodoButtonNode.setAttribute('id', todo.id);
    markTodoButtonNode.addEventListener('click', event => {
      let newState = todoFunctions.markTodo(state, todo.id);

      update(newState);
      activebutton(newState);
    });
    buttonContainer.appendChild(markTodoButtonNode);

    // add classes for css

    return todoNode;
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
    addTodoForm.addEventListener('submit', event => {
      
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      event.preventDefault();
      // what is inside event.target?
      console.log(event);
      let description = document.getElementById('input').value; // event.target ....
      document.getElementById('input').value = "";
      // hint: todoFunctions.addTodo
      
      if (description.length > 0 && description.length<= 30){
      let newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
      activebutton(newState);
              }else if(description.length == 0){
        alert('Enter a task!');  
      } else {
        alert('Your task is too long!');
      }
    });
  }


  // you should not need to change this function
  let update = newState => {
    state = newState;
    renderState(state);
    console.log(state)
  };

  // you do not need to change this function
  let renderState = state => {
    const todoListNode = document.createElement('ol');
     console.log('the list')
    state.forEach(todo => todoListNode.appendChild(createTodoNode(todo)));

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();