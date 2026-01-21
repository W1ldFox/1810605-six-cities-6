import { describe, it, expect } from 'vitest';
import offersReducer, {
  changeCity,
  changeSortType,
  loadOffers,
  setActiveOfferId,
  setOffersLoadError,
  setOffersLoading
} from '../offers-slice';
import { Offer } from '../../../types';

describe('offersSlice', () => {
  it('should return initial state', () => {
    const result = offersReducer(undefined, { type: 'unknown' });
    expect(result).toEqual({
      city: {
        name: 'Paris',
        location: { latitude: 48.85661, longitude: 2.351499 }
      },
      items: [],
      isLoading: false,
      hasError: false,
      sortType: 'Popular',
      activeOfferId: null
    });
  });

  it('should handle changeCity', () => {
    const result = offersReducer(undefined, changeCity({
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976 }
    }));
    expect(result.city.name).toBe('Amsterdam');
    expect(result.activeOfferId).toBeNull();
  });

  it('should handle loadOffers', () => {
    const offers: Offer[] = [{
      id: '1',
      title: 'Test',
      type: 'apartment',
      price: 120,
      rating: 4.5,
      isPremium: false,
      isFavorite: false,
      previewImage: '/img/test.jpg',
      location: { latitude: 1, longitude: 1 },
      city: { name: 'Paris', location: { latitude: 1, longitude: 1 } },
      bedrooms: 1,
      maxAdults: 2,
      description: 'Test',
      goods: [],
      host: { name: 'Host', avatarUrl: '/img/a.jpg', isPro: false },
      images: []
    }];
    const result = offersReducer(undefined, loadOffers(offers));
    expect(result.items).toEqual(offers);
  });

  it('should handle setOffersLoading', () => {
    const result = offersReducer(undefined, setOffersLoading(true));
    expect(result.isLoading).toBe(true);
  });

  it('should handle setOffersLoadError', () => {
    const result = offersReducer(undefined, setOffersLoadError(true));
    expect(result.hasError).toBe(true);
  });

  it('should handle changeSortType', () => {
    const result = offersReducer(undefined, changeSortType('Price: high to low'));
    expect(result.sortType).toBe('Price: high to low');
  });

  it('should handle setActiveOfferId', () => {
    const result = offersReducer(undefined, setActiveOfferId('10'));
    expect(result.activeOfferId).toBe('10');
  });
});
