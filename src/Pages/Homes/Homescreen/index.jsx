import React from 'react'
import Herosection from "../Herosection"
import JobListings from "../JobListings"
import ViewAllJobs from "../../../components/ViewAllJobs"

function index() {
  return (
    <>
        <Herosection/>
        <JobListings/>
        <ViewAllJobs/>
    </>
  )
}

export default index