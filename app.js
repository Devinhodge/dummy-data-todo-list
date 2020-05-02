let orderedListElement = document.querySelector('ol')

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( response => response.json())
  .then( json => arrayOfTodos = json)
    console.log('fetchTodos', fetchTodos)
}
const logTodos = () => {
  console.log(arrayOfTodos)
}
const populateTodos = () => {
  console.log('orderedListElement', orderedListElement)
  console.log('arrayOfTodos', arrayOfTodos)
  var listItem = document.createElement("li");
  
  arrayOfTodos.forEach(obj => {
    console.log('obj', obj)
    listItem.innerText = obj.title
    orderedListElement.appendChild(listItem)
    //changedColor(obj)
  })

  for (let index = 0; index < arrayOfTodos.length; index++) {
    const element = arrayOfTodos[index];
    var listItem = document.createElement("li")
    listItem.innerText = element.title + element.userId
    orderedListElement.appendChild(listItem)
  }
}