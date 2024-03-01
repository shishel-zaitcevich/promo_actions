import { NavLink } from 'react-router-dom';
import '../../assets/styles/footer.scss';

export function Footer() {
  return (
    <footer className="footer">
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
