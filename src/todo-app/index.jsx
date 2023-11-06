import { useContext, useState } from "react";
import Button from "./component/button/button";
import Input from "./component/input/input";
import { Context } from "./context/ContextProvide";
import { ADD_TODO } from "./context/actions";

const TodoApp = () => {
    const [task , setTask ] = useState('');

    const  consumer =  useContext(Context);

    console.log(consumer)

    const handleChange = (event)=> {
        setTask(event.target.value)
    }

function addItem  () {
    consumer?.dispatch({type:  ADD_TODO , payload:task })
}

  return (
    <div>
      <h2>This is todo app</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input placeholder="Enter Task"   onChange = { handleChange} />
        {/* <Input placeholder="Enter Task" value={""}  onChange = { (event)=> {
        setTask(event.target.value)
    }} /> */}
        <Button buttonText="Add"  onClick = {addItem}/>
      </div>
    </div>
  );
};

export default TodoApp;
