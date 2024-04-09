import React from 'react'
import Herosection from "../Herosection"
import JobListings from "../JobListings"
import ViewAllJobs from "../../../components/ViewAllJobs"
import HomeCards from "../../../components/HomeCards"

function index() {
  return (
    <>
        <Herosection/>
        <HomeCards/>
        <JobListings/>
        <ViewAllJobs/>
    </>
  )
}

export default index