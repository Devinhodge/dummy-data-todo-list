 // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

 /*let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},

{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20
*/
let orderedListElement = document.querySelector('ol')

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
      console.log('fetchTodos', fetchTodos)
}
const logTodos = () => {

  console.log(arrayOfTodos)

}

const populateTodos = () => {
  console.log('orderedListElement', orderedListElement)
  console.log('arrayOfTodos', arrayOfTodos)
  var listItem = document.createElement("li");
  
  arrayOfTodos.forEach(item => {
    console.log('item', item)
    listItem.innerText = item.title
    orderedListElement.appendChild(listItem)
  })
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const element = arrayOfTodos[index];
  }
}
/*let changedColor = (item) => {
  if (item.completed === false) {
  }
  if (item.completed) {
    li.style.color = 'green'
  } else {
    li.style.color = 'red'
  }
}
//document.getElementById("todo-list").innerHTML = arrayOfTodos;*/
