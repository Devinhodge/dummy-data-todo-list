const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => arrayOfTodos = json)
      console.log('fetchTodos', fetchTodos)
};

const logTodos = () => {
  console.log(arrayOfTodos)
};

const populateTodos = () => {
  var ol = document.getElementById("todo-list");
  ol.innerHTML = ``;
  arrayOfTodos.forEach((x) => {
    var li = document.createElement("li");
    var span = document.createElement("span");
    if (!x.completed) {
      span.style = "color:red";
    } else {
      span.style = "color:green";
    }
    span.innerText = x.title;
    li.appendChild(span);
    ol.appendChild(li);
  });
};