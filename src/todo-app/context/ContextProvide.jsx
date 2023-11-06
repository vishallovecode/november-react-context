import { useReducer } from "react"


const initialState = {
    item: []
}
export const ContextProvider =  (props)=> {

    const [state , dispatch] = useReducer(reducer , initialState) //  reducer=> it a pure is function 
}

return  (
    <ContextProvider.Provider>
        {props.children}
    </ContextProvider.Provider>
)

// context  (we have to manakge complex state) 
// like some of compoennt we need to hanlde multiple state at a time there
//  useState should not use useReducer is best way to use  
// useReducer is notthing  it is a hooks  (like ) function just taking two parameter  
// first is reducer function and second intiial state 



// reducer function are the function which which behave like a pure 
// function you cannot do any type of sideeffexcts inside this function

// side  effects (which can change the output  lets saye xample api call list of the use netwowkr than we will not get data)


//getUserDetails (userId)=> { =>  1
    // calling the api and returning the data
// }


// reducer function are pure function which only depends on the diff input same input same output
//