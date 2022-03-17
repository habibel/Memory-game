import React from 'react'
import './Modal.css'

function Modal({RandomCards, numberofwin}) {
  return (
    <div className='container'>
        <div className='content'>
            <img className='winimage' src={require('../../Images/win.gif')} alt="win" />
            <button  className='playagain' onClick={RandomCards}>играть</button>
            <p>ваше время игры : {numberofwin}</p>
        </div>
    </div>
  )
}

export default Modal