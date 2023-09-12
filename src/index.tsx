import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {StoresProvider, stores} from '@/store';
import '@/assets/icons/index';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLDivElement);

root.render(
  <HashRouter>
    <StoresProvider value={stores}>
      <App />
    </StoresProvider>
  </HashRouter>
);
