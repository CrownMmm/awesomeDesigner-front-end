import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// import { StoresProvider, stores } from '@/store';
import App from './App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLDivElement);

root.render(
  <HashRouter>
    <DndProvider backend={HTML5Backend}>
      {/* <StoresProvider value={stores}> */}
      <App />
      {/* </StoresProvider> */}
    </DndProvider>
  </HashRouter>
);
