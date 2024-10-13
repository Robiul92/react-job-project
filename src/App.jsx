import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobPages from './pages/JobPages';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<MainLayout />} >
<Route index element ={<HomePage />} />
<Route path ='/jobs' element ={<JobPages />} />
<Route path ='*' element ={<NotFound />} />
      </Route>
)
  );

const App = () => {
  return  <RouterProvider router={router} />
  

  
   
  
}

export default App