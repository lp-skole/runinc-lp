import React from 'react'
import WeLoveRunning from '../components/Layout/WeLoveRunning/WeLoveRunning'
import Event from '../pages/Event'
import Shop from './Shop'
import Contact from './Contact'

const Home = () =>{
  return (
    <article>
      <WeLoveRunning/>
      <Event/>
      <Shop/>
      <Contact/>
    </article>
  )
}

export default Home
