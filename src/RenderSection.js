import React from 'react';
import nTimes from './helpers';

const RenderSections = ({ section, data }) => (
  <div className={`${section}`}>
    {
      data.map(({ line, parts }) => {
        return (
          <div key={`${section}-${line}-${parts}`}
            className={`${section}-${line}`} >
              {nTimes(parts, (i) => (
                <div key={`${parts}-${i}`} 
                  className={`${section}-${line}-${i}`} 
                />
              ))}
          </div>
        )
      })
    }
  </div>
)

export default RenderSections