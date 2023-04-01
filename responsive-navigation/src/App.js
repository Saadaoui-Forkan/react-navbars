import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [active,setActive] = useState("navUl")
  const [toggle, setToggle] = useState("bars")

  const handleToggle = () =>{
    active === "navUl" ? setActive("navUl active") : setActive("navUl")
    toggle === "bars" ? setToggle("bars toggle") : setToggle("bars")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='nav'>
          <ul className={active}>
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
            <li>Link5</li>
          </ul>
          <div className={toggle} onClick={handleToggle}>
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
