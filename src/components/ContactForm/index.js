import React, { useState } from 'react';
import { FormStyle } from './styles';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle>
        <form 
          action="https://formsubmit.co/gustavohenri316@icloud.com" 
          method="POST"
        >
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="https://gustavohenri316.vercel.app/contact"></input>
        <button type="submit">Send</button>
        </form>
      </FormStyle>
    </>
  );
}
