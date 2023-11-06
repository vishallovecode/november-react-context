import { useContext } from "react";
import { ThemeContext } from "./App";

export const GChild1 = (props) => {

    // data  consume
  const state = useContext(ThemeContext);
  console.log(state);
  return (
    <div>
      <h2>{state.theme}</h2>
    </div>
  );
};

export const GChild2 = (props) => {
  const state = useContext(ThemeContext);
  console.log(state);

  const inputChange = (event) => {
    state.toggleTheme(event.target.value);
  };

  return  (
    <div>
    <h2>GChild 2</h2>
    <h2></h2>
    <input placeholder="write a theme" onChange={inputChange} />
  </div>
  )
};
