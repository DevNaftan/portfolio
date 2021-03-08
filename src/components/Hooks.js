import { useState, useEffect } from 'react';

function useMenu() {
  const [headerBG, setheaderBG] = useState('transparent');
  const [menu, setMenu] = useState(false);

  const showHideMenu = () => {
    if (!menu) {
      setheaderBG('var(--menu-top-color)');
      document.body.style.overflow = 'hidden';
      return true;
    }
    setheaderBG('transparent');
    document.body.style.overflow = 'auto';
    return false;
  };

  return { headerBG, menu, setMenu, showHideMenu };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export { useMenu, useWindowDimensions };
