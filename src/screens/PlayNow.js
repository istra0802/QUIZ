import React from 'react'
import "../scss/PlayNow.scss"
import CoinStack from '../components/CoinStack'

export default function PlayNow() {
  return (
    <div className='play-container'>
        <div className='play-box'>
            <CoinStack/>
        <h1 className='play-heading'>You have got 0 coins</h1>
        <p className='play-text'> Check out more quizzes to test your skills and keeps grabbing more coins!</p>
        <a className='ani shine btn'> Play Now </a>
        </div>
        <div>

        </div>
        
    </div>
  )
}
