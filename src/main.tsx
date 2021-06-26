import 'focus-visible';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './components/App/App';
import './styles/global.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
