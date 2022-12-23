import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const element = React.createElement('h1', { className: 'title'}, 'Hola mundo');
// const container = React.createElement('div', null, element)

// JSX
// todas las etiquetas se tienen que cerrar
// solo puede retornar un elemento padre a la vez
const element = <h1 className="title">Hola mundo</h1>;
const container = <div>{element}</div>

// JSX Component - Props
function Greeting(props) {
  return (
    <h1>Hola {props.name}</h1>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Simon" />
      <Greeting name="Daniela"/>
      <Greeting name="Victor"/>
      <Greeting name="Juan"/>
      <Greeting name="Maria"/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
