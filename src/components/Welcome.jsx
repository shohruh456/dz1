import React from 'react'

const Welcome = ({isLoggedin}) => {
  return (
    <div>
        {isLoggedin ? <h1>Xush Kelibsiz!</h1> : <h1>Porolingiz notog`ri!</h1>}
    </div>
  )
}

export default Welcome