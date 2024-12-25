import React from 'react'

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img  src={require('./Images/AddToCart.jpg')} />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
        <img src={require('./Images/Realme5G.jpg')} />
        </div>
        <div className="text-wrapper item">
            <span>
             Realme5G
            </span><br/>
            <span>
              Price:$1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
