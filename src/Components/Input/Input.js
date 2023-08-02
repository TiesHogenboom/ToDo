import React from "react";
import "./Input.css";


class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }


    update = (event) => {
        this.setState({inputValue: event.target.value});
    }

//als we met document.getElement ... of document.query ... werken in React, dan is het component uncontrolled

    enter = (event) =>{
        if(event.keyCode === 13){
            console.log("enter gedrukt");
            this.props.inputPressedEnter(this.state.inputValue);
        }
        
    }

    render() {
        return (
            <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} class="input" type="text" placeholder="..." />
        );
    }

}

export default Input;