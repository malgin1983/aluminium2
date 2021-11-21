import * as React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [state2, setState2] = React.useState([])
  console.log('state2', state2)
 
  const handleClick = async() => {
    try {
      const res = await fetch('http://localhost:5500/api/products')
      const json = await res.json()
      setState2(json)

    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>{'Hello wrds'}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick = {handleClick}
        >
          Get Users
        </button>
        <div >
            {!!state2.length >0 && state2.map(({id, description}) => <span key={id}>{description}</span>)}
        </div>
      </header>
    </div>
  );
}

export default App;
