import { useState } from "react";

function App() {
  const [search, setSearch] = useState(false)
  const handleSearch = () => {
    setSearch(!search)
  }
  return (
    <div className={search ? 'search active' : 'search'}>
      <input type="text" className="input" placeholder="Search..."/>
      <button className="btn" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default App;
