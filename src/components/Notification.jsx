import React from 'react'

const Notification = ({notification}) => {
  return (
    <div>
        {notification.length > 0 && notification ? <h1>Xa xabar bor va u tog`ri</h1> : <h1>notog`ri malumot</h1>}
    </div>
  )
}

export default Notification