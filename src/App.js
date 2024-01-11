import AddTask from './component/AddTask';
import TodoTask from './component/TodoTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <a className='title'>Task To Do </a>
  <div className='box'>
      <AddTask/>
      <TodoTask/>
  </div>
    </div>
  );
}

export default App;
