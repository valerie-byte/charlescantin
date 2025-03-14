import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageTarif from './components/pagetarif/pageTarif';
import PageGalerie from './components/pagegalerie/pageGalerie';
import PageAccueil from './components/pageaccueil/pageAccueil';
import PageContact from './components/pagecontact/pageContact';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter ([
  {
    path:"/",
    element:<App/>
  },
  {path:"accueil",
    element:<PageAccueil/>
  },
  {path:"galerie",
    element:<PageGalerie/>
  },
  {path:"tarif",
    element:<PageTarif/>
  },
  {path:"contact",
    element:<PageContact/>
  },
 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
