import './App.css';
// Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <header>Todo List</header>
      <Form/>
      <TodoList />
    </div>
  );
}

export default App;
