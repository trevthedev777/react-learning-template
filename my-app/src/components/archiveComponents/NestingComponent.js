import React, { Component } from 'react';
import UserMessage from './UserMessage';
import UserData from './UserData';

export class NestingComponent extends Component {
  constructor(props) {
    super(props)
     this.state = {
       isloaded: true,
       isloggedin: true
    };
  };
  
  render() {
    return (
      <div>
        <UserData isloaded={this.state.isloaded}/>
        <UserMessage isloggedin={this.state.isloggedin}/>
      </div>
    )
  };
};

export default NestingComponent;
