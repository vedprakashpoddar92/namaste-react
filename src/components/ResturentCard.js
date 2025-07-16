import React from 'react'

function ResturentCard() {
  return (
    <div className="card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/1eabb351-687b-4146-af0c-289abb697d89_393213.jpg" alt="ResturentImage" />
        <div className="card-body">
            <h2 className="card-title">Resturent Name</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  )
}

export default ResturentCard