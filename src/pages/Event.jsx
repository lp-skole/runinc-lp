import React from 'react';
import '../globalStyles/_variables.scss'
import '../globalStyles/_mixins.scss'
import '../App.scss';
import picture from '../gfx/event.jpg'

const Event = () =>{
  return (
    <article className="event-page">
      <div className="hero-pic">
        <section className="title title-right">
          <h2>next event</h2>
        </section>
        <img src={picture} alt="marathon"/>
      </div>
      <aside className="content-card">
        <h3>events</h3>
        <ul>
          <li>copenhagen marathon</li>
          <p>Den 29. maj 2018</p>
          <li>aarhus city run</li>
          <p>Den 1. juni 2018</p>
          <li>berlin marathon</li>
          <p>Den 6. juni 2018</p>
        </ul>
      </aside>
    </article>
  )
}
export default Event