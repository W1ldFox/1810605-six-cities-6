import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReviewsList from '../reviews-list';

describe('ReviewsList', () => {
  it('renders list of reviews', () => {
    render(
      <ReviewsList
        reviews={[
          { id: '1', comment: 'Nice', date: '2020-01-01', rating: 4, user: { name: 'Max', avatarUrl: '/img/a.jpg', isPro: false } },
          { id: '2', comment: 'Good', date: '2021-01-01', rating: 5, user: { name: 'Jane', avatarUrl: '/img/b.jpg', isPro: false } }
        ]}
      />
    );

    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });
});
