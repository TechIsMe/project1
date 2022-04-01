import React from 'react'

function Global(props) {

  return (
    <div className='puppies'>
        <div> <img src={props.myImage} alt={props.myImage} /></div>
        <div>{props.myTitle}</div>

    </div>
  )
}

export default Global