import React from 'react'



const ShowPhrase = ({randomPhrase}) => {

    const {phrase, author} = randomPhrase;


  return (
    <div className='app_container'>
    <h3 className='app__text'>{phrase}</h3>
    <h4 className='app__author'>{author}</h4>
    </div>
  )
}

export default ShowPhrase;
