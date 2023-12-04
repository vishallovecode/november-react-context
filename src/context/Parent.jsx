import Child from "./child.jsx";

const Parent  = (props)=> {
    return  (
        <div>
            <Child name = {props.name}/>
        </div>
    )
}


export default Parent;