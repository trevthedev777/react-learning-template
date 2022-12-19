import React, { Component } from 'react'

export class EventsClasses extends Component {
    clickHandler() {
        console.log('Click the class button')
    }
  render() {
    return (
      <div>
            <button onClick={this.clickHandler}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClasses

