import { useReducer } from "react"


const initialState = {
    item: []
}
export const ContextProvider =  (props)=> {

    const [state , dispatch] = useReducer(reducer , initialState)
}

return  (
    <ContextProvider.Provider>
        {props.children}
    </ContextProvider.Provider>
)