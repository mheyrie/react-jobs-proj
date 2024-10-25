import React from 'react'
import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96 mt-16">
        <i className="fas fa-exclamation-triangle text-yellow-400 fa-4 mb-4"><h1 className="text-6xl font-bold mb-4">404</h1></i>
        <h1 className="text-6xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl mb-5">This page does  not exist</p> 
        <Link to='/' className="text-white bg-green-700 hover:bg-deepMongoose rounded-md px-3 py-2 mt-4">
            Go Back
        </Link>        
    </section>
  )
}

export default NotFoundPage