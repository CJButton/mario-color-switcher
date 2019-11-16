import React, { useState } from 'react';
import './App.scss';

const nTimes = (n, cb) => {
  const returnedElements = [];
  for (let i = 0; i < n; i++) {
    returnedElements.push(cb(i))
  }
  return returnedElements;
}

const App = () => {
  const [appTheme, setTheme] = useState('luigi')

  const changeTheme = () => {
    const theme = appTheme === 'mario' ? 'luigi' : 'mario';
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
            {nTimes(4, (i) => (
                <div className={`head-0-${i}`} />
            ))}
          </div>
          <div className="head-1">
            {nTimes(6, (i) => (
                <div className={`head-1-${i}`} />
            ))}
          </div>
          <div className="head-2">
            {nTimes(6, (i) => (
                <div className={`head-2-${i}`} />
            ))}
          </div>
          <div className="head-3">
            {nTimes(3, (i) => (
                <div className={`head-3-${i}`} />
            ))}
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
