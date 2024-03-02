import { PrizeItem } from './PrizeItem';
import { itemsData } from './itemsData';
import '../../assets/styles/promoContentStyles.scss';

export function MainContent() {
  document.documentElement.style.setProperty(
    '--window-inner-width',
    `${window.innerWidth}px`
  );
  document.documentElement.style.setProperty(
    '--window-inner-height',
    `${window.innerHeight}px`
  );
  return (
    <div className="main_wrapper">
      <img src="images/green_curl.svg" alt="curl" className="curl" />
      <img src="images/lemon.png" alt="lemon" className="lemon" />
      <main className="container">
        <div className="content">
          <h2 className="prizes_title">ВЫИГРЫВАЙ ПРИЗЫ</h2>
          <h3 className="guaranted_title">Гарантированный приз</h3>
          <section className="receipt_registration">
            <img src="images/chips.png" alt="chips" className="chips" />
            <p className="text">
              Зарегистрируйте один чек и получите подписку Яндекс Плюс на 1 год
            </p>
          </section>
          <section className="every-month_prize">
            <h3 className="guaranted_title">Ежемесячный приз</h3>
            <PrizeItem data={itemsData} />
          </section>
          <button
            className={`button_prizes`}
            // onClick={handleOpenModal}
          >
            ЗАГРУЗИТЬ ЧЕК
          </button>
        </div>
      </main>
    </div>
  );
}
