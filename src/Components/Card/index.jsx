/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Card from './Card'
import Imag from './Images'
import Modal from '../Modal/Modal'
import './style.css'

function Game() {

  const [cards , setCards ] = useState([])
  const [card1 , setCard1] = useState(null)
  const [card2 , setCard2] = useState(null)
  const [verifeid , setVerifeid] = useState(0)
  const [sec , setsec] = useState(0)
  const [min , setmin] = useState(0)
  const [hour , sethour] = useState(0)
  const [numberofwin , setnumberofwin] = useState('')
  const [win , setwin] = useState(false)
  const [clicked , setClicked] = useState(false)
  let time

useEffect(() => {

 //время
    time = setInterval(() => {
          setsec( sec + 1 )
              if( sec === 59){
                setmin( min + 1)
                setsec(0)
                if(min === 59){
                  sethour( hour + 1)
                  setmin(0)
                }
              }
    },1000);

    return () => clearInterval(time)
}, [sec,min,hour])


  const handlercard = (card) => {
  
    card1 ? setCard2(card) : setCard1(card)
 
     setTimeout(() => reset(), 8000)

  }

  useEffect(() =>{

    if (card1 && card2)
    { //проверка карт
      setClicked(true)
      
      if(card1.src === card2.src)
              
      {      
        if(verifeid === Imag.length - 1 )
        { 
          
          //рассчитать количество выигрышей
          clearInterval(time)
          //открыть модальное окно после победы
          setwin(true)
          setnumberofwin(mytime =>(hour<10 ? "0"+hour : hour) + ":" + (min<10 ? "0"+min : min) + ":" + (sec<10 ? "0"+sec : sec))
        }
        
          //проверка всех пар карт
          setVerifeid(preverifeid => preverifeid + 1) 

              setCards(firstCards => {
                    return firstCards.map(card => {
                      if (card.src === card1.src )
                        {
                          return {...card , catch: true}
                        }   
                        else {
                          return card
                        }
                    })
              })
              //опустошение карт, которые не соответствовали
              reset()
        
        
      }
        else
        {   //проведите карту назад
            setTimeout(() => reset(), 1000);
        }
    }

  },[card1, card2, min, sec,hour,time, verifeid])

  
  const reset = () => {
    //опорожнение
    setCard1(null)
    setCard2(null)
    setClicked(false)
  }

  //показать случайные карты
  const RandomCards = () => {

    // [...Imag , ...Imag] за пару карт
    const Random = [...Imag , ...Imag]
    .map((card) => ({ ...card, id:Math.random()})).sort(() => Math.random() - 0.5)

    setsec(0)
    setmin(0)
    sethour(0)
    setwin(false)
    setVerifeid(0)
    setCards(Random)
  }


  //первая игра
  useEffect(() => {
    
    RandomCards()

  }, [])

  return (
    <div className="App">
      <h1>Игра Память</h1>
      <p className='time'>{hour<10 ? "0"+hour : hour} : {min<10 ? "0"+min : min} : {sec<10 ? "0"+sec : sec}</p>
      <button className='btn' onClick={RandomCards}>играть</button>
      <div className='card-grid'>
        {cards.map(card =>  (
          <Card key={card.id} card={card} handlercard={handlercard} 
          clicked={clicked} flip={card === card1 || card === card2 || card.catch}/>
        ))}
      </div>
      { win && <Modal RandomCards={RandomCards} numberofwin={numberofwin}/>}
    </div>
  );
}

export default Game