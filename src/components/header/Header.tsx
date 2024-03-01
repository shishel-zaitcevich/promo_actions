import '../../assets/styles/header.scss';
import { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export function Header() {
  return (
    <header className={`header `}>
      <div className="container header_container">
        <HeaderTop />
        <HeaderContent />
      </div>
    </header>
  );
}
