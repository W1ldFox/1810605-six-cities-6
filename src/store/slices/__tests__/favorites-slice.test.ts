import { describe, it, expect } from 'vitest';
import favoritesReducer, { setFavorites } from '../favorites-slice';
import { Offer } from '../../../types';

describe('favoritesSlice', () => {
  it('should return initial state', () => {
    const result = favoritesReducer(undefined, { type: 'unknown' });
    expect(result).toEqual({ items: [] });
  });

  it('should handle setFavorites', () => {
    const offers: Offer[] = [{
      id: '1',
      title: 'Fav',
      type: 'apartment',
      price: 120,
      rating: 4.5,
      isPremium: false,
      isFavorite: true,
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
    const result = favoritesReducer(undefined, setFavorites(offers));
    expect(result.items).toEqual(offers);
  });
});
