import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ReviewItem from '../review-item';

describe('ReviewItem', () => {
  it('renders author name and comment', () => {
    render(
      <ReviewItem
        review={{
          id: '1',
          comment: 'Great place',
          date: '2020-01-01',
          rating: 4,
          user: { name: 'Alice', avatarUrl: '/img/a.jpg', isPro: false }
        }}
      />
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Great place')).toBeInTheDocument();
  });
});
