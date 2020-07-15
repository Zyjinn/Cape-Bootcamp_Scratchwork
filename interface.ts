// Todo function, takes in title and text or description of todos and shows them 

// function showTodo(todo: { title: string, text: string }) {
//     console.log(todo.title + '' + todo.text);
// }

// let myTodo = { title: 'trash', text: 'Take out trash' }

// showTodo(myTodo)

// Create an interface to make this easier!
interface Todo {
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(todo.title + ':' + todo.text);
}
let myTodo = { title: 'Trash', text: 'take out trash' }

showTodo(myTodo);