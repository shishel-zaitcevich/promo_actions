import { Navigation } from './Navigation';

import '../../assets/styles/mainStyles.scss';

export function HeaderTop() {
  return (
    <div className="header_top">
      <img src="images/logo.svg" alt="actions" className="logo" />
      <Navigation />
    </div>
  );
}
