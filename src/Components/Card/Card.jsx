import React from 'react'
import './card.css'
function Card({card,handlercard , flip , clicked }) {
  const handleClick = () =>{
    if(!clicked)
    {
      handlercard(card)
    }
  }
  return (
          <div className='card'>
            <div className={card.catch ? "hide" : ""}>            
              <div className={flip ? "flip" : ""}>
                 <img className='front' src={card.src} alt='card front' />
                <img className='back' src={require('../../Images/Background.png')}
                onClick={handleClick} alt='card back' /> 
              </div>
            </div> 
          </div>
  )
}

export default Card