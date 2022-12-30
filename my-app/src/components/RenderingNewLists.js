import React from 'react'
import Trust from './Trust'

function RenderingNewLists() {
    const shoppingList = [
        'Eggs',
        'Milk',
        'Bread',
        'Bacon'
    ]

    const peopleITrust = [
        {
            name: 'Trevor',
            age: 33
        },
        {
            name: 'Jason',
            age: 32
        },
        {
            name: 'David',
            age: 30
        }
    ]

  return (
    <div>
        {shoppingList.map((list, index) => {
            return (
                <h1 key={index}>{list}</h1>
            )
        })}
        <hr />
        {peopleITrust.map((trust) => {
            return <Trust key={trust.name} peopleITrust={trust}/>
        })}
    </div>
  )
}

export default RenderingNewLists
