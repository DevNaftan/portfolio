import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './styles/Projects.css';

function Projects() {
  return (
    <section id='projects' className='Projects'>
      <div className='title-section-container'>
        <h3 className='title-section'>Projects</h3>
      </div>
      <div className='Projects__container'>
        <a
          className='project'
          href='https://devnaftan.github.io/url-shortening-api/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className='fa-external-link-alt'
          />
          <figure className='project-img url-shortening-api'></figure>
          <div className='project-description'>
            <strong>URL Shortening API</strong>
            <p>
              A responsive WebApp to shorten links quickly and safely using an
              API.
            </p>
          </div>
        </a>
        <a
          className='project'
          href='https://devnaftan.github.io/covid19-tracker/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className='fa-external-link-alt'
          />
          <figure className='project-img covid19-tracker'></figure>
          <div className='project-description'>
            <strong>COVID-19 Tracker</strong>
            <p>
              This project helps track the global cases of COVID-19 disease.
            </p>
          </div>
        </a>
        <a
          className='project'
          href='https://devnaftan.github.io/naftan-movie/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className='fa-external-link-alt'
          />
          <figure className='project-img naftan-movie'></figure>
          <div className='project-description'>
            <strong>Naftan Movie</strong>
            <p>In Naftan Movie you can download a large number of movies.</p>
          </div>
        </a>
        <a
          className='project'
          href='https://devnaftan.github.io/rock-paper-scissors/'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className='fa-external-link-alt'
          />
          <figure className='project-img rock-paper-scissors'></figure>
          <div className='project-description'>
            <strong>"Rock, Paper, Scissors"</strong>
            <p>Have fun playing this classic game now digitally.</p>
          </div>
        </a>
      </div>
      <div className='more'>
        <a
          href='https://github.com/DevNaftan?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          View more...
        </a>
      </div>
    </section>
  );
}

export default Projects;
