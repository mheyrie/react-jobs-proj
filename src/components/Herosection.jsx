import React from 'react'

const Herosection = ({
  title = 'Become a React Developer',
  subtitle = 'Find the React job that suits your skill set'
}) => {
  return (
    <section className="bg-lightOysterPink py-20 mb-4"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col item-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mt-10 text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Herosection