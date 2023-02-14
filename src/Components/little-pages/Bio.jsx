import React from 'react'

const Bio = ({items, Heading}) => {
  return (
    <div>
      <Heading title="Short Competition"/>
      {items.bio.map(item => (
        <div className='short-container'>
          <div className='short-title'>
            <h4>{item.title}</h4>
          </div>
          <div className='short-text'>
            <p>position : {item.position}</p>
            <p>Year : {item.years}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bio;