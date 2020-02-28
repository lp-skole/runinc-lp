import React from 'react';
import './messageform.scss';

const MessageForm = () => {
  return (
    <div className="message-form">
      <h3>send en besked</h3>
      <form>
        <label htmlFor="name">navn :</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="email">email :</label>
        <input type="text" name="email" id="email"/>
        <label htmlFor="number">telefonnr. :</label>
        <input type="number" name="number" id="number"/>
        <label htmlFor="textarea">besked :</label>
        <textarea name="textarea" id="textarea" rows="10"/>
        <input type="submit" value="send besked"/>
      </form>
    </div>
  )
}

export default MessageForm
