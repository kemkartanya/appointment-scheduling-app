import React from 'react'
import ServiceCard from '../components/Services/ServiceCard'
import { services } from '../assets/data/services'
import Testimonial from '../components/Testimonial/Testimonial'

const Services = () => {
  return (
    <>
    
      <section>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] '>
            {services.map((item, index)=> <ServiceCard item={item} index={index} key={index}/>)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What our patients say</h2>
            <p className='text__para text-center'>World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>

    </>
  )
}

export default Services