import {NavLink} from 'react-router-dom'
import logor from '../assets/images/logor.png'
import { useState } from "react"

const Navbar = () => {
    
    const [open, setOpen] = useState(false)

    const handleHamburger = () =>{
        setOpen((previ) => !previ)
        // console.log(open)
    }

    const linkClass = ({isActive}) => isActive ? 'bg-black text-white hover:bg-lightAlabaster hover:text-white rounded-md px-3 py-2' :'text-white hover:bg-lightAlabaster hover:text-white rounded-md px-3 py-2'

  return (
    <nav className="bg-deepVoodoo border-b-8 border-white w-full top-0 fixed">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
                    <NavLink to="/" className="flex flex-shrink-0 items-center mr-4 ">
                       <img className="h-10 w-auto rounded-full" src={logor} alt="logo"/>
                       <span className="hidden md:block text-[#00A8C5]  text-2xl font-bold ml-2">Available Job OFFERS</span> 
                    </NavLink>
                    <div className="hidden md:flex md:ml-auto">
                        <div className="flex space-x-2">
                            <NavLink to="/" className={linkClass}>Home</NavLink>
                            <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                            <NavLink to="/add-jobs" className={linkClass}>Add Jobs</NavLink>
                        </div>
                    </div>   
                </div>
                {/* Hamburger Icon */}
                <button id="menu-btn" onClick={handleHamburger} className={`block hamburger md:hidden ${open ? 'open' : ''}`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>

                {/* Mobile screen */}
                {open ? (
                    <div className="md:hidden bg-yellow-500">
                    <div id="menu" className="flex flex-col mt-40 top-10 items-center space-y-6 font-bold left-2 right-2 ">
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                        <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
                        <NavLink to="/add-jobs" className={linkClass}>Add Jobs</NavLink>
                    </div>
                </div>
                ) : '' }
                
            </div>
        </div> 
    </nav>
  )
}

export default Navbar