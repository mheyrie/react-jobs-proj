import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({isHome = false}) => {
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectchJobs = async  () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try{
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
      } catch (error){
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
     }
    fectchJobs();
  }, [])

  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-gray-200 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-deepVoodoo text-center m-6">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        
          {loading ? (
            <Spinner loading={loading}/>
           ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job)=>(
                  <JobListing key={job.id} job={job}/>
                ))}
            </div>
            )}
        </div>
    </section>
  )
}

export default JobListings