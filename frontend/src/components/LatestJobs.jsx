import React from 'react'
import LatestJobCards from './LatestJobCards';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
   
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='text-3xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    randomJobs.length <= 0 ? <span>No Job Available</span> :
                     randomJobs?.slice(0,6).map((job) =>
                         <LatestJobCards/>
                    )
                }
            </div>
        </div>
    )
}

export default LatestJobs