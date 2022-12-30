import React from "react";

class NavBarForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            name: '',
            message: "You are logged out"
        }
    }

    // Event Handler
    handleSignIn() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.true,
            name: 'Trevor',
            message: 'Welcome Back!'
        }))
    }

    render() {
        return <div>
            <h1>Welcome {this.state.name}</h1>
            <p>{this.state.message}</p>
            <button onClick={() => this.handleClick}>Login</button>
            <button>Sign Up</button>
        </div>
    }
}

export default NavBarForm;