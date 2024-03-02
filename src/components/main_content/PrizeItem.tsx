import { ItemsType } from './itemsData';
import '../../assets/styles/promoContentStyles.scss';

export function PrizeItem({ data }: { data: ItemsType[] }) {
  return (
    <div className="prizes_items">
      {data.map((item, index) => (
        <div key={index} className="prize_item">
          <img
            src={item.img}
            alt={item.description}
            className={`prize_item__img  item-${index}`}
          />
          <div className="prize_item__text_container">
            <p className="prize_item__text">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
