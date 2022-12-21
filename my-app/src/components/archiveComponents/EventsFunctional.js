import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log('Clicked the functional Button')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click me : I'm a functional component</button>
    </div>
  )
}

export default EventsFunctional
