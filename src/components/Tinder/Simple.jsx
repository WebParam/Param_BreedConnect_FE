import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const breads = [
  {
    name: 'Type 1',
    url: './assets/images/d1.jpg'
  },
  {
    name: 'Type 2',
    url: './assets/images/d2.jpg'
  },
  {
    name: 'Type 3',
    url: './assets/images/d3.jpg'
  },
  {
    name: 'Type 4',
    url: './assets/images/d4.jpg'
  },
  {
    name: 'Type 5',
    url: './assets/images/d5.jpg'
  },
  {
    name: 'Type 6',
    url: './assets/images/d6.jpg'
  }
]

function Simple () {
  const characters = breads
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
