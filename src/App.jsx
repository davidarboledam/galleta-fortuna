import { useState } from 'react';
import './App.css';
import Button from "./components/Button"
import ShowPhrase from './components/ShowPhrase';
import arr from "./utils/phrases.json";
import randomArr from './services/randomArr';
import pictures from "./utils/pictures.json"


function App() {

  const quote = randomArr(arr);
   
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const numberPicture = randomArr(pictures)
  const [picture, setPicture] = useState(numberPicture);

  const appStyle = {
    backgroundImage: `url(../fortuna-1/fondo${picture}.jpg)`,
  }


  return (
    <div className='app' style={appStyle}>
      <h1 className='app__title'>Galletas de la fortuna</h1>
      <ShowPhrase
      randomPhrase = {randomPhrase} />
      <Button
      setRandomPhrase={setRandomPhrase}
      setPicture ={setPicture} />
    </div>
  )
}

export default App;
