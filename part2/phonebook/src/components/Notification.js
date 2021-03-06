import React from 'react'

const Notification = ({ message, error }) => {
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  }

  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  }

  if (message === null) {
    return null
  }

  if (error) {
    return <div style={errorStyle}>{message}</div>
  }

  return <div style={notificationStyle}>{message}</div>
}

export default Notification
