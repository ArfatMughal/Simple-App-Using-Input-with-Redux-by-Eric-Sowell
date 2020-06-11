import React from "react";
import { connect } from "react-redux";

function Lister(props) {
    console.log('render'.props);
    return(
        <div>
            <h3>Listing Component</h3>
            <form onSubmit={props.submit}>
            <input value={props.inputText} onChange={props.inputChange}/>
            </form>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inputText: state.inputText,
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return{
        inputChange:(evt) => {
            const action = {type:'CHANGED_INPUT_TEXT', text:evt.target.value};
            dispatch(action);
        },
        submit:(evt) => {
            evt.preventDefault();
            const action ={ type: 'Add_ITEM'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lister);