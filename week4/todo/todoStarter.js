
import {TodoController, TodoOpenView, TodoTotalView, TodoItemsView, TodoProgressView} from './todo.js';

const todoController = TodoController();

// binding of the main view

document.getElementById('plus').onclick    = _ => todoController.addTodo();
document.getElementById('fortune').onclick = _ => todoController.addFortuneTodo();

// create the sub-views, incl. binding

TodoItemsView    (todoController, document.getElementById('todoContainer'));
TodoTotalView    (todoController, document.getElementById('numberOfTasks'));
TodoOpenView     (todoController, document.getElementById('openTasks'));
TodoProgressView (todoController, document.getElementById('progress'));

// document.getElementById("progress").style.setProperty("--progress-pct","90%"); // hab ich zum testen drin.
// document.getElementById("progress").style["--progress-pct"] = "90%"; // diese Art property zu setzen funktioniert nicht, weil doof. (sollte gleich gehen wie oben)

// init the model

todoController.addTodo();
