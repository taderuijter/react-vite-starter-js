import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppContext } from './store/AppContext';

function App() {
  const [count, setCount] = useState(0)
  const ctx = useContext(AppContext);
  const [numbers, setNumbers] = useState([12, 423, 4453, 432]);

  const addExpensesHandler = (expense) => {
    setNumbers((prevNumbers) => {
      return [expense, ...prevNumbers];
    });
  };

  const listItems = numbers.map((number, index) =>
  <span key={index}>
    {number + ' , '}
  </span>
);


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Welcome back {ctx.name}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => ctx.changeName('Jane Doe')}>
          Change context Name
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>
        This are list items
      </h2>
      <p>
        {listItems}
      </p>
      <button onClick={() => {addExpensesHandler(Math.round(Math.random() * 10))}}>
          Add a expense
        </button>
    </div>
  )
}

export default App
