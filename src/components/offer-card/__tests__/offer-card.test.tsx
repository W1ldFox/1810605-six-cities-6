import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import OfferCard from '../offer-card';

describe('OfferCard', () => {
  const offer = {
    id: '1',
    title: 'Beautiful apartment',
    type: 'apartment' as const,
    price: 120,
    rating: 4.5,
    isPremium: true,
    isFavorite: false,
    previewImage: '/img/apartment-01.jpg',
    location: { latitude: 1, longitude: 1 },
    city: { name: 'Paris', location: { latitude: 1, longitude: 1 } },
    bedrooms: 1,
    maxAdults: 2,
    description: 'Test',
    goods: [],
    host: { name: 'Host', avatarUrl: '/img/a.jpg', isPro: false },
    images: []
  };

  it('renders title', () => {
    render(
      <BrowserRouter>
        <OfferCard offer={offer} />
      </BrowserRouter>
    );
    expect(screen.getByText('Beautiful apartment')).toBeInTheDocument();
  });

  it('renders premium badge', () => {
    render(
      <BrowserRouter>
        <OfferCard offer={offer} />
      </BrowserRouter>
    );
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
