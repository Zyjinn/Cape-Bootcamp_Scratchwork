// Todo function, takes in title and text or description of todos and shows them 
function showTodo(todo) {
    console.log(todo.title + ':' + todo.text);
}
var myTodo = { title: 'Trash', text: 'take out trash' };
showTodo(myTodo);
