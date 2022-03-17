import React from 'react'
import {Link} from 'react-router-dom'
function home() {
  return (
    <div className='App'>
        <div className='ctr'>
            <h1>Игра Память</h1>
                <Link to={'/game'}>
                    <button className='btn' >нажмите, чтобы начать играть</button>
                </Link>     
        </div>
        
    </div>
  )
}

export default home