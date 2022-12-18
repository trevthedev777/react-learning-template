// rfce
import React from 'react'

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// rafce = exports the function as an arrow function
import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// rce = creates and exports a class component
import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets

// rconst
constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// clg, clo
console.log(first)
console.log('first', first)