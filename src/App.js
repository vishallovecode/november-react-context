import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Parent from './Parent';

export const ThemeContext =  createContext();



function App() {
  const [theme , setTheme] = useState('dark');

const toggleTheme = (value)=> {
  setTheme(value ==='dark' ? 'white': 'dark')
}

// const state  = {
//   theme,
//   toggleTheme
// }

const state  = {
  theme:theme,
  toggleTheme:toggleTheme
}
  return (
    <ThemeContext.Provider  value ={state}   >
    <Parent />
    </ThemeContext.Provider>
  );
}

export default App;




// context 

//createContext useContext which is useFul for creating a context or redeem it