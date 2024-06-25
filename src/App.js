import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [counter,setcounter]=useState(15);
  const AddValue = () =>{
    counter=counter+1;
    set(counter);
  }
  const RemoveValue = () =>{
    counter=counter-1;
    set(counter);
  }
  const MultiplyValue = () =>{
    counter=counter*2;
    set(counter);
  }
  const DivideValue = () =>{
    counter=counter/2;
    set(counter);
  }

  const set = (counter) =>{
    setcounter(counter);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: {counter}</p>
        <div className="SetValue">
        <button className='Edit' onClick={AddValue}>Add Value</button>
        <button className='Edit' onClick={RemoveValue}>Subtract Value</button>
        <button className='Edit' onClick={MultiplyValue}>Multiply Value by 2</button>
        <button className='Edit' onClick={DivideValue}>Divide Value by 2</button>
        </div>
      </header>
    </div>
  );
}

export default App;
