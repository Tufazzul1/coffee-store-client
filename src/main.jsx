import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Addcoffee from './components/Addcoffee';
import UpdateCoffee from './components/UpdateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path : 'addCoffee',
    element: <Addcoffee></Addcoffee>
  },
  {
    path: 'update',
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
