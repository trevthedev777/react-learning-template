import React from 'react';

function Trust(props) {

    const peopleITrust = props.peopleITrust // call this as your props

  return (
    <div>
        <p>{peopleITrust.name}</p>
        <p>{peopleITrust.age}</p>
    </div>
  )
}

export default Trust
