import { createStore } from "redux";

const initialState = {
    inputValue:""
};

const reducer = (state = initialState,action)=>{
  console.log('reducer', action);
  switch (action.type) {
      case 'Input_Change':
          return Object.assign({},state, { inputValue: action.text});
      default:
          return state;
  }
}

const InputMirror_store = createStore(reducer);

export default InputMirror_store;