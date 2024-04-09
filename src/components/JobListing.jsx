import React, { useState } from 'react'

const JobListing = ({job}) => {

    const [showFullDesc, setShowFullDesc] = useState(false);

    let description = job.description;

    if (!showFullDesc) {
        description = description.substring(0, 90) + '...'
    }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
        <div className="mb-6">
            <div className="text-yellow-600 my-2">{job.type}</div>
            <h1 className="text-xl font-bold">{job.title}</h1>
        </div>
        <div className="mb-5">{description}</div>
        <h3 className="text-darkGrayishBlue mb-2">{job.salary}/Year</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
            <i className="fa-solid fa-location-dot text-lg"></i>
            {job.location}
            </div>
            <a href={`/job/${job.id}`} className="h-[36px] bg-slate-500 hover:bg-deepMongoose text-white px-4 py-2 rounded-full text-center text-sm">Read More</a>
        </div>
        </div>
    </div>
  )
}

export default JobListing