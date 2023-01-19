import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css';

function Form(props) {
  const [name, setName] = useState('');
  const [terms, setTerms] = useState(false);

  // event - es la accion
  // event handler - es la función que se ejecuta con la acción

  // const handleChangeName = (e) => setName(e.target.value)
  function handleChangeName(e) {
    setName(e.target.value)
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      // uncontrolled inputs
      // console.log(event.target.elements.email.value);
      // console.log(event.target.elements.terms.checked);
      // event.target.reset();

      // props.createTask(event.target.elements.name.value);

      // controlled inputs
      props.createTask(name);
      setName('');
      setTerms(false);
    }}>
      <label>
        Name
        {/* conrolled inputs */}
        <input
          type="text"
          name="name"
          onChange={handleChangeName}
          value={name}
        />
      </label>
      <label htmlFor="terms">Términos</label>
      <input
        id="terms"
        name="terms"
        type="checkbox"
        onChange={(e) => setTerms(e.target.checked)}
        checked={terms}
      />
      <textarea />
      <button
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  )
}

// CRUD
// Create - Read - Update - Delete

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(name) {
    const task = { id: uuid(), name: name };

    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <Form createTask={createTask} />
      <Counter />
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
