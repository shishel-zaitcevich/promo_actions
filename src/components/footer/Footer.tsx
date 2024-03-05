import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

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
        <NavLink className={`footer_link `} to="/">
          ГЛАВНАЯ
        </NavLink>
        <NavLink to="/prizes" className={`footer_link`}>
          ПРИЗЫ
        </NavLink>
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
