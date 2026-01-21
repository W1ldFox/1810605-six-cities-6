import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

const root = createRoot(document.getElementById('root')!);

store.dispatch(fetchOffersAction());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </StrictMode>
);
