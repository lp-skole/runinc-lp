import React from 'react';
import './weloverunning.scss';
import picture from '../../../gfx/hero.jpg';

const WeLoveRunning = () => {
  return (
    <div className="hero-pic">
      <div className="title">
        <h2>we love <span>running</span></h2>
      </div>
      <img src={picture} alt="guy running hero"/>
    </div>
  )
}
export default WeLoveRunning