import { describe, it, expect } from 'vitest';
import offerReducer, {
  setOffer,
  setNearbyOffers,
  setComments,
  setOfferLoading,
  setOfferNotFound,
  setNearbyOffersLoading,
  setCommentsLoading,
  setCommentPosting,
  setCommentPostError
} from '../offer-slice';
import { Offer, Review } from '../../../types';

describe('offerSlice', () => {
  it('should return initial state', () => {
    const result = offerReducer(undefined, { type: 'unknown' });
    expect(result).toEqual({
      offer: null,
      nearbyOffers: [],
      comments: [],
      isOfferLoading: false,
      isOfferNotFound: false,
      isNearbyOffersLoading: false,
      isCommentsLoading: false,
      isCommentPosting: false,
      isCommentPostError: false
    });
  });

  it('should handle setOffer', () => {
    const offer: Offer = {
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
    };
    const result = offerReducer(undefined, setOffer(offer));
    expect(result.offer).toEqual(offer);
  });

  it('should handle setNearbyOffers', () => {
    const offers: Offer[] = [{
      id: '2',
      title: 'Near',
      type: 'room',
      price: 80,
      rating: 4,
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
    const result = offerReducer(undefined, setNearbyOffers(offers));
    expect(result.nearbyOffers).toEqual(offers);
  });

  it('should handle setComments', () => {
    const comments: Review[] = [{
      id: '1',
      comment: 'Nice',
      date: '2020-01-01',
      rating: 4,
      user: { name: 'User', avatarUrl: '/img/a.jpg', isPro: false }
    }];
    const result = offerReducer(undefined, setComments(comments));
    expect(result.comments).toEqual(comments);
  });

  it('should handle loading flags', () => {
    const result = offerReducer(undefined, setOfferLoading(true));
    expect(result.isOfferLoading).toBe(true);
  });

  it('should handle not found flag', () => {
    const result = offerReducer(undefined, setOfferNotFound(true));
    expect(result.isOfferNotFound).toBe(true);
  });

  it('should handle nearby offers loading flag', () => {
    const result = offerReducer(undefined, setNearbyOffersLoading(true));
    expect(result.isNearbyOffersLoading).toBe(true);
  });

  it('should handle comments loading flag', () => {
    const result = offerReducer(undefined, setCommentsLoading(true));
    expect(result.isCommentsLoading).toBe(true);
  });

  it('should handle comment posting flags', () => {
    const result = offerReducer(undefined, setCommentPosting(true));
    expect(result.isCommentPosting).toBe(true);
    const next = offerReducer(undefined, setCommentPostError(true));
    expect(next.isCommentPostError).toBe(true);
  });
});
