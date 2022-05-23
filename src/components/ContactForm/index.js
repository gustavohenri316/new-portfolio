import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { FormStyle } from './styles';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
          <button type="submit" onClick={handleClick}>Send</button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Email enviado com sucesso!!
            </Alert>
          </Snackbar>
        </form>
      </FormStyle>
    </>
  );
}
