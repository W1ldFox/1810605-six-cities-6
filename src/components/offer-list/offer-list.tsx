import { Offer } from '../../types';
import OfferCard from '../offer-card/offer-card';

interface OfferListProps {
  offers: Offer[];
  onOfferHover?: (offer: Offer | undefined) => void;
}

function OfferList({ offers, onOfferHover }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onOfferHover?.(offer)}
          onMouseLeave={() => onOfferHover?.(undefined)}
        />
      ))}
    </div>
  );
}

export default OfferList;
