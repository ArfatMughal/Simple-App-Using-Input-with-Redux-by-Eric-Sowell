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

const store = createStore(reducer);

export default store;