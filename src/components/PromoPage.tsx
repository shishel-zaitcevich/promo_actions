import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { MainContent } from './main_content/MainContent';

export function PromoPage() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <MainContent />
        {/* <Footer /> */}
      </div>
    </>
  );
}
