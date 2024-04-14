import React from 'react'
import jobs from '../jobs.json'
import '@fortawesome/fontawesome-free/css/all.css';
import JobListing from "./JobListing";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3)
  return (
    <section className="bg-gray-200 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-deepVoodoo text-center m-6">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job)=>(
              <JobListing key={job.id} job={job}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings