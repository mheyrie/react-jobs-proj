import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './Pages/Homes/Homescreen'
import Navbar from "./components/Navbar"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./Pages/Homes/JobsPage"


const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path="/" element={<MainLayout />}>
    
    <Route index element={<Home/>}/>
    <Route path="/jobs" element={<JobsPage/>}/>

  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App