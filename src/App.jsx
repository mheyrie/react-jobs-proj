import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './Pages/Homes/Homescreen'
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./Pages/JobsPage"
import NotFoundPage from "./Pages/NotFoundPage"
import JobPage from "./Pages/JobPage"


const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path="/" element={<MainLayout />}>
    
    <Route index element={<Home/>}/>
    <Route path="/jobs" element={<JobsPage/>}/>
    <Route path="/jobs/:id" element={<JobPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>

  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App