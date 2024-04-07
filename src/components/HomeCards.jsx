import React from 'react'


const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="gri grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">
                        For Developers
                    </h2>
                    <p className="mt-2 mb-4">
                        Browse our React Jobs and start your career today
                    </p>
                    <a href="/jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 font-semibold hover:bg-violet-200 hover:text-black">Browser Jobs</a>
                </div>
                <div className="bg-indigo-100 p-6 mt-6 marker:rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">
                        For Employers
                    </h2>
                    <p className="mt-2 mb-4">
                        Showcase your Jobs to find the perfect developer for the Role(s)
                    </p>
                    <a href="/jobs.html" className="inline-block bg-green-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-gray-300 hover:text-black">Add Jobs</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCards