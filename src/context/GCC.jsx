import { useContext } from "react";
import { AppContext } from "../App";

const GCC  = (props)=> {

    // here i want to use
    const object =  useContext(AppContext);
    console.log(object)
    return  (
        <div>
            <h2>{props.name}</h2>
            <br></br>
            <br></br>
            <h2>{object.batch}</h2>
        </div>
    )
}


export default GCC;