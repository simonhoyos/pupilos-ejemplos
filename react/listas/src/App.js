import { useState } from 'react';
import './App.css';

function Count() {
  const [count, setCount] = useState(0);
  // const state = useState(0);

  // const value = state[0];
  // const setState = state[1];

  // useEffect(() => {
  //   setInterval(() => setState(value + 1), 1000);
  // }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

function List() {
  const [todos, setTodos] = useState([
    { id: 0, name: 'tarea 1' },
    { id: 1, name: 'tarea 2' },
    { id: 2, name: 'tarea 3' }
  ]);

  return todos.map((todo) => {
    return (
      <p key={todo.id}>{todo.name}</p>
    );
  })
}

function App() {
  return (
    <div>
      <Count />
      <Count />
      <List />
    </div>
  );
}

export default App;
