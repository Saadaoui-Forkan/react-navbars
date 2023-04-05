import { useState } from "react";

function App() {

  const [visible, setVisible] = useState(false)
  const visibleNav = () => {
    setVisible(!visible)
  }
  return (
    <div className="App">
      <button className="nav-btn open-btn" onClick={visibleNav}>
        <i className="fas fa-bars"></i>
      </button>

  <img
    src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
    alt="Logo" className="logo" 
  />

  <p className="text">Mobile Navigation</p>

  <div className = {visible ? "nav visible nav-black" : "nav nav-black"}>
    <div className = {visible ? "nav visible nav-red" : "nav nav-red"}>
      <div className = {visible ? "nav visible nav-white" : "nav nav-white"}>
        <button className="nav-btn close-btn" onClick={visibleNav}>
          <i className="fas fa-times"></i>
        </button>

        <img 
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt="Logo" className="logo" 
        />

        <ul className="list">
          <li><a href="#">Teams</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Life at Netflix</a></li>
          <li>
            <ul>
              <li><a href="#">Netflix culture memo</a></li>
              <li><a href="#">Work life balance</a></li>
              <li><a href="#">Inclusion & diversity</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
