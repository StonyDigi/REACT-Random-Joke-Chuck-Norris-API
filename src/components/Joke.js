import React from 'react'

const Joke = ({id, click}) => {
  return (
    <>
    <div id={id} className='jokeContainer'>
        <p>Random Chuck Norris Jokes</p>
    </div>

    <button onClick={click}>Get Random Joke</button>
    </>

  )
}

export default Joke