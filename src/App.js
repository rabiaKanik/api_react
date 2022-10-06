
import React,{useState, useEffect } from "react";
import './App.css';

import './darkMode.css';
import { Login } from "./pages/login/Login";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <main  className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
     <Login theme={theme}/>
    
    </main>
  );
}

export default App;
