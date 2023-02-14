import React from 'react'

const Info = ({items, Heading}) => {
  return (
    <div>
      <Heading title="About Me"/>
      <div className="about-details-content">
        {items.deatils.map(item => {
          return <div className='about-details-content-box'>
            <div className='icon'>
              <p>{item.icon}</p>
            </div>
            <div className='about-details-content-box-text'>
              <h4>{item.text}</h4>
              <p>{item.value}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Info