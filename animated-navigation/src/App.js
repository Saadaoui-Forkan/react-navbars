import { useState } from "react";

function App() {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <nav className={active ? "active" : undefined}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Works</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <button className="icon" onClick={handleClick}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
}

export default App;
