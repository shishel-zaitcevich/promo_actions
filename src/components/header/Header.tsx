import { useEffect, useState } from 'react';

import { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

import '../../assets/styles/header.scss';

export function Header() {
  const [windowSize, setWindowSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`header `}
      style={{ width: windowSize.width, height: windowSize.height }}
    >
      <div className="container header_container">
        <HeaderTop />
        <HeaderContent />
      </div>
    </header>
  );
}
