import React from 'react'
import { about } from '../Data/data'

// Import Little Page
import { Info, Bio, Price, Slider, Services, Heading } from './little-pages'

const About = () => {
  return (
    <div>
      <section className='about'>
        {about.map(item => {
          return <div>
            <div className='about-details'>
              <Info items={item} Heading={Heading}/>
              <Bio items={item} Heading={Heading}/>
            </div>
            <Services items={item} title={Heading}/>
            <Slider items={item} title={Heading}/>
            <Price items={item} title={Heading}/>
          </div>
        })}
      </section>
    </div>
  )
}

export default About