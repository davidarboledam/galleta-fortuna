import React from 'react'
import arr from "../utils/phrases.json"
import randomArr from '../services/randomArr'
import pictures from "../utils/pictures.json"

const Button = ({setRandomPhrase, setPicture}) => {


  const handleClick = () => {
    const quote = randomArr(arr);
    setRandomPhrase(quote);
    const numberPicture = randomArr(pictures)
    setPicture(numberPicture);
    
  }

  return(
    <button onClick={handleClick} className="app__btn">Probar mi suerte</button>

  )
}

export default Button;