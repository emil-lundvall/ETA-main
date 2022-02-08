import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({ setShowPopup, }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('ETA-form-system', 'ETA_default', form.current, 'user_bzyOSH4fkPsokzINaYOT3')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        setShowPopup(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="f-name">Your name</label>
      <input name="f-name" type="text"></input>

      <label htmlFor="f-mail">Mail</label>
      <input name="f-mail" type="email"></input>

      <label htmlFor="f-company">Company</label>
      <input name="f-company" type="text"></input>

      <label htmlFor="f-message">Message</label>
      <textarea name="f-message" type="text" id="message-box" />

      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactUs