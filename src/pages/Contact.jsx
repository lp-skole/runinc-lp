import React from 'react';
import MessageForm from '../components/Layout/MessageForm/MessageForm';
import picture from '../gfx/map.JPG';
import Footer from '../components/Layout/Footer/Footer';

const Contact = () =>{
  return (
    <article className="contact-page">
      <div>
        <section className="contact-title">
          <h2>contact</h2>
        </section>
        <img src={picture} alt="guy running hero"/>
      </div>
      <MessageForm/>
      <Footer/>
    </article>
  )
}
export default Contact