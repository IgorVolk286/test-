import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { GlobalStyles } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-/">
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
