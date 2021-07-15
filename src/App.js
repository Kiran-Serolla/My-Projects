import AddTodo from './components/AddTodo/AddTodo';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
     <h1 className = "header"> Todo List</h1>
     <AddTodo></AddTodo>
     <TodoList></TodoList>
    </div>
  );
}

export default App;
