import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './styles/About.css';
import avatar from '../assets/images/avatar.png';

function About() {
  return (
    <section id='about' className='About'>
      <div className='title-section-container'>
        <h3 className='title-section'>About me</h3>
      </div>
      <div className='About__avatar-container'>
        <figure className='About__avatar'>
          <img src={avatar} alt='Avatar' />
        </figure>
      </div>
      <div className='social-networks'>
        <a
          href='https://github.com/DevNaftan'
          target='_blank'
          rel='noreferrer'
          title='GitHub'
        >
          <FontAwesomeIcon icon={faGithub} className='sn-logo' />
        </a>
        <a
          href='https://twitter.com/jhcito'
          target='_blank'
          rel='noreferrer'
          title='Twitter'
        >
          <FontAwesomeIcon icon={faTwitter} className='sn-logo' />
        </a>
        <a
          href='https://www.instagram.com/jhcito/'
          target='_blank'
          rel='noreferrer'
          title='Instagram'
        >
          <FontAwesomeIcon icon={faInstagram} className='sn-logo' />
        </a>
      </div>
      <div className='About__description'>
        <p>
          Greetings, my name is Jhean Pacheco, I'm a Frontend Developer and I
          have collaborated actively for more than 5 years in the tech industry.
        </p>
        <p>
          My goal as web technology and software developer is making creative
          designs and technologically advanced. I'm a proactive and dynamic
          person, used to solve problems and unforeseen events autonomously,
          without the need for a permanent supervision.
        </p>
        <p>
          I have a great capacity for coordination, which allows me
          satisfactorily simulate different tasks, responding to both the needs
          of the company's professionals as well as the demands of the
          customers.
        </p>
        <div className='About__softskills'>
          <strong>Soft skills</strong>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className='fa-check' />
              <span>Autodidact</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className='fa-check' />
              <span>Teamwork</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className='fa-check' />
              <span>Time management</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
