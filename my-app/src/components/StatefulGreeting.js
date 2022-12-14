import React from "react";

export default class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    setCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        });
    };

    render() {
        return (
           <div className="greeting">
            <h1>
                Hello { this.props.name } 
                <p>I'm a stateful component!</p>
            </h1>
            <h2>You've clicked { this.state.count } times</h2>
            <button onClick={this.setCount}>Increment Count</button>
            {/* When the button is clicked, the setCount() is called */}
           </div> 
        )
    }
}