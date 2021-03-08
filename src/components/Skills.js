import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import './styles/Skills.css';

function Skills() {
  return (
    <section id='skills' className='Skills'>
      <div className='title-section-container'>
        <h3 className='title-section'>Skills</h3>
      </div>
      <div className='Skills__container'>
        <div className='skill'>
          <FontAwesomeIcon icon={faHtml5} className='fa-html5' />
          <strong className='skill-title'>HTML5</strong>
          <ul className='subskills'>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Semantics</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Preprocessors</span>
            </li>
          </ul>
        </div>
        <div className='skill'>
          <FontAwesomeIcon icon={faCss3Alt} className='fa-css3-alt' />
          <strong className='skill-title'>CSS3</strong>
          <ul className='subskills'>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>BEM Methodology</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Preprocessors</span>
            </li>
          </ul>
        </div>
        <div className='skill'>
          <FontAwesomeIcon icon={faJs} className='fa-js' />
          <strong className='skill-title'>JAVASCRIPT</strong>
          <ul className='subskills'>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Vanilla</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>React</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Node.js</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Jest</span>
            </li>
          </ul>
        </div>
        <div className='skill'>
          <FontAwesomeIcon icon={faMobileAlt} className='fa-mobile-alt' />
          <strong className='skill-title'>DEVICES</strong>
          <ul className='subskills'>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Responsive Design</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Accessibility</span>
            </li>
          </ul>
        </div>
        <div className='skill'>
          <FontAwesomeIcon icon={faTools} className='fa-tools' />
          <strong className='skill-title'>TOOLS</strong>
          <ul className='subskills'>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Git</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>VS Code</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Webpack</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Postman</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Bootstrap</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} className='fa-code' />
              <span>Chrome DevTools</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
