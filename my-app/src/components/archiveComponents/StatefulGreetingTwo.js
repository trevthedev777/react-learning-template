import React from "react";

// This is the correct way to create the class
class StatefulGreetingTwo extends React.Component {
    // The constructor is usually where state is defined in class components
    // it is best practice to always pass props to the constructor() and super()
    constructor(props) {
        super(props);
        // as soon as its instantiated that we can access and manipulate as required
        this.state = {
            // Changeable Properties, referred to as the initial state and can change based on updating or user interactivity
            introduction: "Hello",
            buttonText: "Exit",
        };
    };

    // This is connected to the <button> and is called to update the state
    handleClick() {
        // You need to write this syntax to successfully update the state, or you will get errors
        this.setState({
            // We are replacing this from the this.state = {
                // =====================
                // introduction: "Hello",
                // buttonText: "Exit",
                // =====================
            // }
            introduction: "Goodbye!",
            buttonText: "Enter!",
        });
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
    }

    render() {
        return (
            <div>
                <h1>{ this.state.introduction }, { this.props.greeting }</h1>
                <button onClick={() => this.handleClick()}>{ this.state.buttonText }</button>
            </div>
        )
    };
};

export default StatefulGreetingTwo;