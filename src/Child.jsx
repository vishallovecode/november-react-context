import { GChild1, GChild2 } from "./Grand.child";

export const Child1 = (props) => {
  return (
    <div>
      <h2>Child 1</h2>
      <GChild1  />
      <select>
        <option value="dark">DARK</option>
        <option value="white">White</option>
      </select>
    </div>
  );
};

export const Child2 = (props) => {
 return  (
    <div>
    <h2>Child 2</h2>
    <GChild2  />
  </div>
 )
};
