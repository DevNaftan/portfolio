import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './styles/Contact.css';

function Contact() {
  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id='contact' className='Contact'>
      <div className='title-section-container'>
        <h3 className='title-section'>Contact</h3>
      </div>
      <div className='Contact__container'>
        <p className='Contact__description'>
          If you have any personal or commercial questions, do not hesitate to
          contact me.
        </p>
        <form className='Contact__form' onSubmit={handlerSubmit}>
          <div className='input-container'>
            <FontAwesomeIcon icon={faUser} className='fa-user' />
            <input
              className='client-input'
              name='client'
              type='text'
              placeholder='Type your real name...'
            />
          </div>
          <div className='input-container'>
            <FontAwesomeIcon icon={faEnvelope} className='fa-envelope' />
            <input
              className='email-input'
              name='email'
              type='email'
              placeholder='Type your email...'
            />
          </div>
          <textarea
            className='message-input'
            name='message'
            placeholder='Type your message...'
          ></textarea>
          <button className='btn' type='submit'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
