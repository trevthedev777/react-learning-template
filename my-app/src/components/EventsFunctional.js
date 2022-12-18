import React from 'react'

function EventsFunctional() {
    // the even function must be inside the component for it to work
    function clickHandler() {
    console.log('Clicked the functional component')
    }
  return (
    <div>
        {/* Dont use () when passing the even handler in React */}
        <button onClick={clickHandler}>click me - functional component</button>
    </div>
  )
}

export default EventsFunctional
