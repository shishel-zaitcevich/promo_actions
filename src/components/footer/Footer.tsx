import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Link, animateScroll as scroll } from 'react-scroll';

import '../../assets/styles/footer.scss';

export function Footer() {
  const [windowSize, setWindowSize] = useState({
    width: document.documentElement.clientWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: document.documentElement.clientWidth,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="footer" style={{ width: windowSize.width }}>
      <nav className="footer_nav">
        <Link
          to="top"
          className={`link footer_link`}
          smooth={true}
          duration={500}
          onClick={scroll.scrollToTop}
        >
          ГЛАВНАЯ
        </Link>
        <Link
          to="prizes"
          className={`link footer_link`}
          smooth={true}
          duration={2000}
        >
          ПРИЗЫ
        </Link>
        <NavLink to="/how_t_ participate" className={`footer_link`}>
          КАК УЧАСТВОВАТЬ
        </NavLink>
        <NavLink to="/questions_and_answers" className={`footer_link `}>
          ВОПРОСЫ И ОТВЕТЫ
        </NavLink>
      </nav>
    </footer>
  );
}
