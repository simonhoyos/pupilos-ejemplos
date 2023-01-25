import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
      method: 'GET',
    })
      .then((response) => {
        console.log('respuesta recibida');
        console.log(response);
        // console.table(response.data)
        setPosts(response.data);
      })
      .catch((err) => {
        console.log('hubo un error')
        console.log(err)
        console.dir(err)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
