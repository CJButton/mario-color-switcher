import React from 'react';
import nTimes from './helpers'

const Body = () => {
  return(
    <div className="body">
      <div className="body-0">
        {nTimes(3, (i) => (
          <div className={`body-0-${i}`}/>
        ))}
      </div>
      <div className="body-1">
        {nTimes(5, (i) => (
          <div className={`body-1-${i}`}/>
        ))}
      </div>
      <div className="body-2">
        {nTimes(3, (i) => (
          <div className={`body-2-${i}`}/>
        ))}
      </div>
      <div className="body-3">
        {nTimes(9, (i) => (
          <div className={`body-3-${i}`}/>
        ))}
      </div>
      <div className="body-4">
        {nTimes(3, (i) => (
          <div className={`body-4-${i}`}/>
        ))}
      </div>
      <div className="body-5">
        {nTimes(3, (i) => (
          <div className={`body-5-${i}`}/>
        ))}
      </div>
      <div className="body-6">
        {nTimes(3, (i) => (
          <div className={`body-6-${i}`}/>
        ))}
      </div>
      <div className="body-7">
        {nTimes(2, (i) => (
          <div className={`body-7-${i}`}/>
        ))}
      </div>
      <div className="body-8">
        {nTimes(2, (i) => (
          <div className={`body-8-${i}`}/>
        ))}
      </div>
    </div>
  )
}

export default Body;