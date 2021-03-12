import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './styles/Hero.css';

function Hero() {
  return (
    <section className='Hero'>
      <h1 className='Hero-title'>Jhean Pacheco</h1>
      <h2 className='Hero-profession'>Frontend Developer</h2>
      <div className='down'>
        <FontAwesomeIcon icon={faChevronDown} className='fa-chevron-down' />
        <FontAwesomeIcon icon={faChevronDown} className='fa-chevron-down' />
      </div>
    </section>
  );
}

export default Hero;
