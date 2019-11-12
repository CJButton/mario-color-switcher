import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [appTheme, setTheme] = useState('light')

  const changeTheme = () => {
    const theme = appTheme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="character">
        <div className="hat">
          <div className="hatTop"/>
          <div className="hatBottom"/>
        </div>
        <div className="head">
          <div className="head-0">
            <div className="head-0-0"></div>
            <div className="head-0-1"></div>
            <div className="head-0-2"></div>
            <div className="head-0-3"></div>
          </div>
          <div className="head-1">
            <div className="head-1-0"></div>
            <div className="head-1-1"></div>
            <div className="head-1-2"></div>
            <div className="head-1-3"></div>
            <div className="head-1-4"></div>
            <div className="head-1-5"></div>
          </div>
          <div className="head-2">
            <div className="head-2-0"></div>
            <div className="head-2-1"></div>
            <div className="head-2-2"></div>
            <div className="head-2-3"></div>
            <div className="head-2-4"></div>
            <div className="head-2-5"></div>
          </div>
          <div className="head-3">
            <div className="head-3-0"></div>
            <div className="head-3-1"></div>
            <div className="head-3-2"></div>
          </div>
          <div className="head-4" />
        </div>
        </div>
        <button onClick={changeTheme}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
