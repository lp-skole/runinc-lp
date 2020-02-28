import React from 'react'
import './shopsection.scss'
import shoe1 from '../../../img/shoe_01.jpg'
import shoe2 from '../../../img/shoe_02.jpg'
import shoe3 from '../../../img/shoe_03.jpg'
import shoe4 from '../../../img/shoe_04.jpg'

const ShopSection = () => {
  return (
    <div className="shop-section">
      <div className="shop-item">
        <a href="#">
          <img src={shoe1} alt="shoe"/>
          <p>Puma Highland 3000 - brown</p>
        </a>
      </div>
      <div className="shop-item">
        <a href="#">
          <img src={shoe2} alt="shoe"/>
          <p>Asics Free Street</p>
        </a>
      </div>
      <div className="shop-item">
        <a href="#">
          <img src={shoe3} alt="shoe"/>
          <p>New Balance Runner Bounce</p>
        </a>
      </div>
      <div className="shop-item">
        <a href="#">
          <img src={shoe4} alt="shoe"/>
          <p>New Balance New York</p>
        </a>
      </div>
      <div className="shop-item">
        <a href="#">
          <img src={shoe1} alt="shoe"/>
          <p>Puma Highland 3000 - brown</p>
        </a>
      </div>
      <div className="shop-item">
        <a href="#">
          <img src={shoe4} alt="shoe"/>
          <p>New Balance New York</p>
        </a>
      </div>
    </div>
  )
}

export default ShopSection
