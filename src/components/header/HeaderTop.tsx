import '../../assets/styles/mainStyles.scss';
import { Navigation } from './Navigation';

export function HeaderTop() {
  return (
    <div className="header_top">
      <img src="images/logo.svg" alt="actions" className="logo" />
      <Navigation />
    </div>
  );
}
