import { ADD_TODO } from "./actions";
const TodoAppReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
      default: 
      return  {
        ...state
      }
  }
};

export default TodoAppReducer;

