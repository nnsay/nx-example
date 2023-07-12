import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as common from '@myorg/common';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log(common.common.name);
