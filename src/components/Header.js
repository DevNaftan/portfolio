import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles/Header.css';
import { useMenu } from './Hooks';

function Header() {
  const { headerBG, menu, setMenu, showHideMenu } = useMenu();

  return (
    <header className='Header' style={{ backgroundColor: headerBG }}>
      <a href='/' className='Header__logo'>
        <strong>Naftan</strong>
      </a>
      {!menu && (
        <FontAwesomeIcon
          icon={faBars}
          className='menu-icon'
          onClick={() => setMenu(showHideMenu)}
        />
      )}
      {menu && (
        <FontAwesomeIcon
          icon={faTimes}
          className='menu-icon'
          onClick={() => setMenu(showHideMenu)}
        />
      )}
      {menu && (
        <nav className='Header__navbar'>
          <ul className='Header__navbar-list'>
            <li>
              <a href='#about' onClick={() => setMenu(showHideMenu)}>
                About me
              </a>
            </li>
            <li>
              <a href='#skills' onClick={() => setMenu(showHideMenu)}>
                Skills
              </a>
            </li>
            <li>
              <a href='#projects' onClick={() => setMenu(showHideMenu)}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={() => setMenu(showHideMenu)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
