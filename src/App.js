import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Parent from './Parent';
import { ContextProvider } from './todo-app/context/ContextProvide';
import TodoApp from './todo-app';
import PopUp from './portal';
import ApiCallExample from './apicall';





export const  ThemeContext = createContext()


function App() {
  const [theme , setTheme] = useState('dark');

 
// const state  = {
//   theme,
//   toggleTheme
// }
 

  return (
  // <ContextProvider>
  //   <TodoApp/>
  //   <PopUp/>
  // </ContextProvider>
  <ApiCallExample/>
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