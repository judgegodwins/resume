import React from 'react';


export default function Project({ head, github, live, details }) {
  return (
    <div className="outline">
      <div className="flex-head-div">
        <h4 className="head project-head">{head}</h4>
        <div style={{ marginLeft: 10 }}>
          <a target="_blank" rel="noopener noreferrer" href={github}>
            <span className="fade">Code</span>
          </a>
          {
            live &&
            <a target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }} href={live}>
              <span className="fade">Live</span>
            </a>
          }
        </div>
      </div>

      <p className="details">
        {details}
      </p>
    </div>
  )
}