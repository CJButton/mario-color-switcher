import React, { useState } from 'react';
import RenderSection from './RenderSection'
import './App.scss';

const App = () => {
  const [appTheme, setTheme] = useState('luigi')

  const changeTheme = () => {
    const theme = appTheme === 'mario' ? 'luigi' : 'mario';
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  const hatData = [
    { line: 0, parts: 0 },
    { line: 1, parts: 0 },
  ]

  const headData = [
    { line: 0, parts: 4 },
    { line: 1, parts: 6 },
    { line: 2, parts: 6 },
    { line: 3, parts: 3 },
    { line: 4, parts: 0 },
  ]

  const bodyData = [
    { line: 0, parts: 3 },
    { line: 1, parts: 5 },
    { line: 2, parts: 3 },
    { line: 3, parts: 9 },
    { line: 4, parts: 3 },
    { line: 5, parts: 3 },
    { line: 6, parts: 3 },
    { line: 7, parts: 2 },
    { line: 8, parts: 2 },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <div className="character">

          <RenderSection section="hat" data={hatData} />
          <RenderSection section="head" data={headData} />
          <RenderSection section="body" data={bodyData} />

        </div>
        <button onClick={changeTheme}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
