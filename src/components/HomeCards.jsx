import {Link} from 'react-router-dom'


const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 p-4 rounded-lg md:gap-6">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">
                        For Developers
                    </h2>
                    <p className="mt-2 mb-4">
                        Browse our React Jobs and start your career today
                    </p>
                    <Link to="/jobs" className="inline-block bg-black text-white rounded-lg px-4 py-2 font-semibold hover:bg-violet-200 hover:text-black">Browser Jobs</Link>
                </div>
                <div className="bg-indigo-100 p-4 rounded-lg shadow-md ">
                    <h2 className="text-2xl font-bold">
                        For Employers
                    </h2>
                    <p className="mt-2 mb-4">
                        Showcase your Jobs to find the perfect developer for the Role(s)
                    </p>
                    <Link to="/add-job" className="inline-block bg-green-700 text-white rounded-lg px-4 py-2 font-semibold hover:bg-gray-300 hover:text-black">Add Jobs</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCards