import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import Home from './Pages/Homes/Homescreen'
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./Pages/JobsPage"
import NotFoundPage from "./Pages/NotFoundPage"
import JobPage, {jobLoader} from "./Pages/JobPage"
import AddJobPage from "./Pages/AddJobPage"
import EditJobPage from "./Pages/EditJobPage"
import Signup from "./Pages/auth/Signup"



const App = () => {

  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    return;
  };


  // Edit Job
  const editJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
    
    <Route path="/" element={<MainLayout />}>
      
      <Route index element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/jobs" element={<JobsPage/>}/>
      <Route path="/add-jobs" element={<AddJobPage addJobSubmit={addJob} />}/>
      <Route path="/edit-job/:id" element={<EditJobPage editJobSubmit={editJob}/>} loader ={jobLoader} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader ={jobLoader} />
      <Route path="*" element={<NotFoundPage/>}/>
  
    </Route>
  )
  );
  return <RouterProvider router={router}/>;
}

export default App