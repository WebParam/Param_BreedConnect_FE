import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import { RequestToPurchase } from "../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';


import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("bcon-user");



function Advanced(props) {

  const [lastDirection, setLastDirection] = useState();

  const [products, setProducts] = useState(props?.products);
  const [currentIndex, setCurrentIndex] = useState(products.length - 1);
  const [status, setStatus]  = useState(0);
  const [visitCount, setVisitCount] = useState(0);
  const [productCount, setProductCount] = useState([]);



  const requestToPurchase=async(id)=>{
    const _id = toast.loading("Please wait...", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const payload = {
      ProductId: id,
      customerId: user.id     
     }
     const response = await RequestToPurchase(payload);
     if(response!=null && response.status == 200){
      toast.dismiss(_id);
      // setStatus(1);
      props.onClick();
     }
     else{
      toast.update(_id, {
        autoClose:2000,
        render: "Request not sent, please try again",
        type: "error",
        isLoading: false,
        
      });
      
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
    console.log("direction", direction)
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

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < products.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      if(products[currentIndex].status === 0 && dir === 'right' ){
        setStatus(1);
        requestToPurchase(products[currentIndex].id)
      }
      else{
        console.log("Product viewing");
        handleSliderChange()
      }
    }
  }

  // increase current index and show card
  const goBack = async () => {
    props.onClick();
    console.log("reloaded", props.products)
    if (!canGoBack) return
    const newIndex = currentIndex + 1;
      updateCurrentIndex(newIndex);
      await childRefs[newIndex].current.restoreCard();
  }

  const handleSliderChange = () => {
    const storedData = localStorage.getItem('productsWithCount');
    console.log("Stored data", storedData)
    setVisitCount(visitCount + 1);
  // Use the `map` method to create a new array with the "count" variable appended to each object
    const newArray = JSON.parse(storedData).map((obj, index) => {
      if(obj.id === products[currentIndex].id){
        obj.count = obj.count + 1;
        return obj;
      }else{
        return obj
      }
    });
    console.log("product counts", newArray);
    localStorage.setItem('productsWithCount', JSON.stringify(newArray));
    setProducts(newArray)

  }


  useEffect(() => {
    const storedData = localStorage.getItem('productsWithCount');
    if (storedData) {
      //setProducts(storedData);
      console.log("stored", JSON.parse(storedData))
    }
  }, []);




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
