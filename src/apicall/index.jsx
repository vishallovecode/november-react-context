import { useEffect, useState } from "react";
import NamCard from "../card";

const ApiCallExample = ()=>{


        const [todos , seTodo]= useState([])
    // i need to call the api when the component loaded without any actions
    const fetchTodo = async ()=>{
       const data =  await fetch('https://jsonplaceholder.typicode.com/todos') ; // server
       const  dataJson = await data.json();
       seTodo(dataJson)
    }

    useEffect(()=>{
        fetchTodo()
    }, [])


    // if you are passing second parameter in usefect as a empty array than the function which is in first parameter will call 
    // only once throught the life of that component , the function will call once the component successfully enter and take the position in dom


    return (
        <div className="container">
           {
            todos.map((todo)=>{
                    return <NamCard todo = {todo}/>
            })
           }
        </div>
    )
}


export default ApiCallExample;