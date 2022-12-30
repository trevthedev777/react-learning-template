import React from 'react';

function UserData(props) {
  return (
    <div>
      <h1>{ props.isloaded ? 'Data Loaded' : 'Loading...' }</h1>
    </div>
  )
};

export default UserData;