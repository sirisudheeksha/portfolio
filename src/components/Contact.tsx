import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {

  // State variables for form inputs
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State variables for validation errors
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // State for success/failure feedback
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Form reference
  const form = useRef<HTMLFormElement | null>(null);

  // Send email function
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for empty fields
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      emailjs.send('service_vj9tejf', 'template_kmssavd', templateParams, '_5AryMba93YxWlDSg')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFeedbackMessage("✅ Your message has been sent successfully!");
          setIsSuccess(true);

          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          setFeedbackMessage("❌ Failed to send the message. Please try again.");
          setIsSuccess(false);
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out! Whether it's for a  job opportunity, collaboration or just a chat.</p>

          {/* Form Start */}
          <form ref={form} noValidate autoComplete="on" className='contact-form' onSubmit={sendEmail}>
            
            {/* Name & Email Fields */}
            <div className='form-flex'>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={nameError ? "input-error" : ""}
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "input-error" : ""}
              />
            </div>

            {/* Error Messages */}
            {nameError && <p className="error-text">❌ Please enter your name.</p>}
            {emailError && <p className="error-text">❌ Please enter a valid email.</p>}

            {/* Message Field */}
            <textarea
              required
              placeholder="Send me any inquiries or questions"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={messageError ? "input-error" : ""}
            />
            
            {/* Error Message for Message Field */}
            {messageError && <p className="error-text">❌ Please enter a message.</p>}

            {/* Submit Button */}
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>

            {/* Success/Error Message Display */}
            {feedbackMessage && (
              <p style={{ color: isSuccess ? "lightgreen" : "red", marginTop: "10px" }}>
                {feedbackMessage}
              </p>
            )}

          </form>
          {/* Form End */}

        </div>
      </div>
    </div>
  );
}

export default Contact;
