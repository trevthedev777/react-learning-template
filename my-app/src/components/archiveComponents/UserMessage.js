import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {/* The first () will render if true and the second () if false */}
        { props.isloggedin ? (
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

export default UserMessage

