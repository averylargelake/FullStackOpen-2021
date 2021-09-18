import React from 'react'

const statusStyle = {

    color: 'green',
    background: 'lightgrey',
    font_size: 20,
    border_style: 'solid',
    border_radius: 5,
    padding: 10,
    margin_bottom: 10
}

const errorStyle = {

  color: 'red',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
}

const Notification = ({ message, type}) => {
    if (message === null) {
      return null
    }
;
    if (type === 'success') {
      return (
        <div style={statusStyle}>
          {message}
        </div>
      )
    } else {
      return (
        <div style={errorStyle}>
          {message}
        </div>
      )
    }
  }

  export default Notification

