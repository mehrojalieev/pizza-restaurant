import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import { BrowserRouter } from 'react-router-dom'
const App = lazy(() => import("./App"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
    <App />
    </Suspense>
  </BrowserRouter>
);


