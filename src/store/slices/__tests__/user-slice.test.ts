import { describe, it, expect } from 'vitest';
import userReducer, { setAuthStatus, setUser } from '../user-slice';
import { AuthorizationStatus, UserData } from '../../../types';

describe('userSlice', () => {
  it('should return initial state', () => {
    const result = userReducer(undefined, { type: 'unknown' });
    expect(result).toEqual({
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
    });
  });

  it('should handle setAuthStatus', () => {
    const result = userReducer(undefined, setAuthStatus(AuthorizationStatus.Auth));
    expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });

  it('should handle setUser', () => {
    const user: UserData = {
      email: 'test@test.local',
      token: 'token',
      avatarUrl: '/img/a.jpg',
      isPro: false
    };
    const result = userReducer(undefined, setUser(user));
    expect(result.user).toEqual(user);
  });
});
