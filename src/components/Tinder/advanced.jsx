import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { RequestToPurchase } from "../../api/endpoints";





function Advanced(props) {


//   const products = [
//   {
//     name: 'Type 1',
//     url: './assets/images/d1.jpg'
//   },
//   {
//     name: 'Type 2',
//     url: './assets/images/d2.jpg'
//   },
//   {
//     name: 'Type 3',
//     url: './assets/images/d3.jpg'
//   },
//   {
//     name: 'Type 4',
//     url: './assets/images/d4.jpg'
//   },
//   {
//     name: 'Type 5',
//     url: './assets/images/d5.jpg'
//   },
//   {
//     name: 'Type 6',
//     url: './assets/images/d6.jpg'
//   }
// ]

  const [lastDirection, setLastDirection] = useState();

  const [products, setProducts] = useState(props.products);
  const [currentIndex, setCurrentIndex] = useState(products.length - 1)



  const request = async (product) => {
    const response = await RequestToPurchase(product);
    if(response!=null && response.status ==200){
      console.log("success");
    }
  }
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(products.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < products.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir, selectedProduct) => {
    console.log("selected", selectedProduct)
    if (canSwipe && currentIndex < products.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
 
    <div>
      <div className='cardContainer'>
        {products.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url('+ character.images[0].url +')' }}
              className='card'
            >
              <h3>{character.name}</h3>
              {/* <div className='tinder-card-footer'>
                <div className='card-add'>Add To Purchase</div>
                </div> */}
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')} className='buttonText'>Swipe left!</button>
        {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
        <div className="reload_img" onClick={() => goBack()}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/reload.svg`} />
        </div>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')} className='buttonText'>Swipe right!</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  )
}

export default Advanced
