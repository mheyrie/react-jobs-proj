import React from 'react'
import Herosection from "../../../components/Herosection"
import JobListings from "../../../components/JobListings"
import ViewAllJobs from "../../../components/ViewAllJobs"
import HomeCards from "../../../components/HomeCards"

function index() {
  return (
    <>
        <Herosection/>
        <HomeCards/>
        <JobListings isHome = {true}/>
        <ViewAllJobs/>
    </>
  )
}

export default index