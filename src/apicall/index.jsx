import { useEffect, useState } from "react";
import NamCard from "../card";

const ApiCallExample = () => {
  const [todos, seTodo] = useState([]);
  const [isError, setError] = useState(false);
  // i need to call the api when the component loaded without any actions
  const fetchTodo = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos"); // server
      console.log(data);
      if (data.ok === true) {
        const dataJson = await data.json();
        seTodo(dataJson);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  // if you are passing second parameter in usefect as a empty array than the function which is in first parameter will call
  // only once throught the life of that component , the function will call once the component successfully enter and take the position in dom

  if (isError) {
    return <h2>There something wrong in your code</h2>;
  }

const handleCardClick = async(id)=> {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`); // server
        console.log(data);
        if (data.ok === true) {
          const dataJson = await data.json();
        //   seTodo(dataJson);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
}


  return (
    <div className="container">
      {todos?.map((todo) => {
        return <NamCard todo={todo} handleCardClick = {handleCardClick}/>;
      })}
    </div>
  );
};

export default ApiCallExample;
