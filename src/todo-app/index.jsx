import Button from "./component/button/button";
import Input from "./component/input/input";

const TodoApp = () => {
  return (
    <div>
      <h2>This is todo app</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input placeholder="Enter Task" value={""} />
        <Button buttonText="Add" />
      </div>
    </div>
  );
};

export default TodoApp;
