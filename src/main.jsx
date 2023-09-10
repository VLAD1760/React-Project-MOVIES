import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home/Home.jsx'
import Movies from './Movies/movies.jsx';
import DetailMovie from './Movies/detailMovie/DetailMovie';
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
    errorElement: <img className='errorImg' src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="" />,
    children: [
      {
        path: "/Home",
        element: < img className='imgM' src="https://64.media.tumblr.com/28e05026d19d88e7fd9bc332d5cb7434/7ce1fd5c6cc53359-58/s540x810/93ca701e9feee199485c0463e16ac1ef14f6e29d.gif" alt="" />,
      },
      {
        path: "/comedia",
        element: <Movies genero="comedia" key={"comedia"} />,
      },
      {
        path: "/independientes",
        element: <Movies genero="independientes" key={"independientes"} />,
        children: [
          {
            path: "independientes/:pelicula",
            element: <DetailMovie key={1} />
          }
        ]
      }
    ],

  },
  {
    path: ":genero/:pelicula",
    element: <DetailMovie key={2} />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
