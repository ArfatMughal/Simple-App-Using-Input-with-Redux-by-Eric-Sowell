import { createStore } from "redux";

const initialState = {
    inputText:"",
    items:[]
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
         case "CHANGED_INPUT_TEXT":
             return Object.assign({},state,{inputText: action.text});
         case "Add_ITEM":
         case "CHANGED_INPUT_TEXT":
             return Object.assign({},state,{
                 items: state.items.concat(state.inputText),
                 inputText: ''
             });
         default:
             return state;
     }
}

const Lister_store = createStore(reducer);

export default Lister_store;