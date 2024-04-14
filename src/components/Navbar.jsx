import {Link} from 'react-router-dom'
import logor from '../assets/images/logor.png'

const Navbar = () => {
  return (
    <nav className="bg-deepVoodoo border-b-8 border-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <Link to="/" className="flex flex-shrink-0 items-center mr-4">
                       <img className="h-10 w-auto rounded-full" src={logor} alt="logo"/>
                       <span className="hidden md:block text-[#00A8C5]  text-2xl font-bold ml-2">Available Job OFFERS</span> 
                    </Link>
                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <Link to="/" className="text-white hover:bg-lightAlabaster hover:text-white rounded-md px-3 py-2">Home</Link>
                            <Link to="/jobs" className="text-white hover:bg-lightAlabaster hover:text-white rounded-md px-3 py-2">Jobs</Link>
                            <Link to="/add-jobs" className="text-white hover:bg-lightAlabaster hover:text-white rounded-md px-3 py-2">Add Jobs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar