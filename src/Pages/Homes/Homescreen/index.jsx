import React from 'react'
import Herosection from "../../../components/Herosection"
import JobListings from "../../../components/JobListings"
import ViewAllJobs from "../../../components/ViewAllJobs"
import HomeCards from "../../../components/HomeCards"
import Reviews from "@/components/Reviews"

function index() {
  return (
    <>
        <Herosection/>
        <HomeCards/>
        <JobListings isHome = {true}/>
        <ViewAllJobs/>
        <Reviews/>
    </>
  )
}

export default index