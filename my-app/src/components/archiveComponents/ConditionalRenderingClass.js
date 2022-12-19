import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isloaded: false,
       isloggedin: true
    }
  }
  
  render() {
    return (
      <div>
        <h1>{ this.state.isloaded ? 'Data Loaded' : 'Loading...' }</h1>
        {/* The first () will render if true and the second () if false */}
        { this.state.isloggedin ? (
          <div>
              <p>Welcome to the site! Please complete the steps below to continue:</p>
              <ol>
                <li>Confirm your email</li>
                <li>Complete your profile</li>
                <li>Subscribe to the newsletter</li>
              </ol>
          </div>
        ) : (<p>Please Sign in</p>) }
      </div>
    )
  }
}

export default ConditionalRenderingClass
