import { useEffect } from 'react';
import '../../assets/styles/header.scss';
import { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export function Header() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--window-inner-width',
      `${window.innerWidth}px`
    );
    document.documentElement.style.setProperty(
      '--window-inner-height',
      `${window.innerHeight}px`
    );
  }, []);
  return (
    <header className={`header `}>
      <div className="container header_container">
        <HeaderTop />
        <HeaderContent />
      </div>
    </header>
  );
}
