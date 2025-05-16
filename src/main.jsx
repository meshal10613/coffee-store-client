import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import CoffeeDetails from './Pages/CoffeeDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        element: <Home/>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee/>
      },
      {
        path: "/coffeDetails/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <CoffeeDetails/>
      },
      {
        path: "/updateCoffee/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <UpdateCoffee/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
