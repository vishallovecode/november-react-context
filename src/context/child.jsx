import GC from "./GC";

const Child  = (props)=> {
    return  (
        <div>
            <GC name ={props.name}/>
        </div>
    )
}


export default Child;