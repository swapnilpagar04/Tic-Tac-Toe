import React from 'react'

const Square = (props) => {
  console.log(props.value)
  return (
    <div className='box' onClick={props.onClick}>
        <p>{props.value}</p>
    </div>
  )
}

export default Square