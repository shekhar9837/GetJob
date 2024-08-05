import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import Filter from './Filter'
const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Filter/>
          <Job/>
          
      </div>
    </div>
  )
}

export default Jobs