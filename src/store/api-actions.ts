import { ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../types';
import { Action, loadOffers, setOffersLoadError, setOffersLoading } from './action';
import { RootState } from './index';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  AxiosInstance,
  Action
>;

const normalizeOffer = (offer: Offer): Offer => {
  const images = Array.isArray(offer.images) ? offer.images : [];
  const goods = Array.isArray(offer.goods) ? offer.goods : [];

  return {
    ...offer,
    images,
    goods,
    host: {
      name: offer.host?.name ?? '',
      avatarUrl: offer.host?.avatarUrl ?? '',
      isPro: offer.host?.isPro ?? false
    },
    isPremium: offer.isPremium ?? false,
    isFavorite: offer.isFavorite ?? false,
    previewImage: offer.previewImage ?? images[0] ?? ''
  };
};

export const fetchOffersAction = (): AppThunk => async (dispatch, _getState, api) => {
  dispatch(setOffersLoading(true));
  dispatch(setOffersLoadError(false));
  try {
    const { data } = await api.get<Offer[]>('/offers');
    dispatch(loadOffers(data.map(normalizeOffer)));
  } catch (error) {
    dispatch(setOffersLoadError(true));
  } finally {
    dispatch(setOffersLoading(false));
  }
};
