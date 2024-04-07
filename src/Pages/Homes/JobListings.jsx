import React from 'react'
import jobs from '../../jobs.json'

const JobListings = () => {

  return (
    <section className="bg-gray-200 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-deepVoodoo text-center m-6">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job)=>(
              <div className="bg-black rounded-xl shadow-md relative" key={job.id}>
              <div className="p-4 bg-pink">
                <div className="mb-6 bg-red">
                  <div className="text-yellow-600 my-2">{job.type}</div>
                </div>
              </div>
            </div> 
            ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings