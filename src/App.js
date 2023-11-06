import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Parent from './Parent';
import TodoApp from './todo-app';

export const ThemeContext =  createContext();



function App() {
  const [theme , setTheme] = useState('dark');

 
// const state  = {
//   theme,
//   toggleTheme
// }
 

  return (
    <ThemeContext.Provider     >
      <TodoApp/>
    </ThemeContext.Provider>
  );
}

export default App;




// context 

//createContext useContext which is useFul for creating a context or redeem it



// store = > it just like a  state variable which is initialized at Provider
// Action Triggered
// Reducer
// Client




// Input Box
// List Container 
// List
// Submit 
// List = > Delete , Mark As Completed 