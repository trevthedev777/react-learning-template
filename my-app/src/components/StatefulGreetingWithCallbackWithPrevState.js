import React from "react";

// This is the correct way to create the class
class StatefulGreetingWithCallbackWithPrevState extends React.Component {
    // The constructor is usually where state is defined in class components
    // it is best practice to always pass props to the constructor() and super()
    // You can not add a state to a class component without creating a constructor()
    constructor(props) {
        super(props);
        // as soon as its instantiated that we can access and manipulate as required
        this.state = {
            // Changeable Properties, referred to as the initial state and can change based on updating or user interactivity
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    };


    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                count: prevState.count + 1
            }
        })
    };

    // incrementFive() {
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    // This is connected to the <button> and is called to update the state
    // handleClick() {
    //     // You need to write this syntax to successfully update the state, or you will get errors
    //     this.setState({
    //     // setState() is asynchronous and runs in the background, to update the values as well as the UI at the same time you need to create a callback function as a 2nd parameter
    //         // We are replacing this from the this.state = {
    //             // =====================
    //             // introduction: "Hello",
    //             // buttonText: "Exit",
    //             // =====================
    //         // }
    //         introduction: this.state.introduction === "Goodbye" ? "Hello" : "Goodbye",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, () => {
    //         // To Update the values at the same time 
    //         console.log('new state:',this.state.introduction)
    //         console.log('new state:',this.state.buttonText)
    //     });
    //     // Anything outside of setState() will render the old values
    //     console.log('old state:',this.state.introduction)
    //     console.log('old state',this.state.buttonText)
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }  
        }
    )
};

    render() {
        return (
            <div>
                <h1>{ this.state.introduction }, { this.props.greeting }</h1>
                <button onClick={() => this.handleClick()}>{ this.state.buttonText }</button>
                <button onClick={() => this.increment()}>Increment</button>
                {/* <button onClick={() => this.incrementFive()}>Count: { this.state.count }</button> */}
                <p>You clicked: { this.state.count } times</p>
            </div>
        )
    };
};

export default StatefulGreetingWithCallbackWithPrevState;