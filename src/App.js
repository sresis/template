
import './App.css';
import UserInput from './form.js';

import React, {useState} from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globalStyle';

function App() {

  // light/dark mode toggle
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        App Name
      </header>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <label class="switch">
          <input id="toggle-but" type="checkbox" onClick={toggleTheme}></input>
          <span className="slider round"></span>
      </label>
        <footer>
        </footer>
      </>
    </ThemeProvider>
      <div>
        hi
        <UserInput />
      </div>
    </div>
  );
}

export default App;
