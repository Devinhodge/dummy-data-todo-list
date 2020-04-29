 // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

 let arrayOfTodos = [
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

let orderedListElement = document.querySelector('ol')

listItem = document.createElement("li");

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => arrayOfTodos = json)
  .then(json => console.log(json))
    if (this.response === this.DONE && this.status === 200) {
    if (this.responseText) { 
        listItem.innerHTML = this.responseText;
        fetchTodos(this.responseText);
    }
    else {
        console.log("Error: Data is empty");
    }
}
  console.log('orderedListElement', orderedListElement)

}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {

}
