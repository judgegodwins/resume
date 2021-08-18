import React from 'react';
import Outline from './Outline';
import Project from './Project';


export default function Work({ type }) {
  return (
    <div className="tab-common work" id={type}>
      <div>
          {
            type === "work"
              ? <h2>Work <br />Experience</h2>
              : <h2>Personal <br />Projects</h2>
          }
      </div>
      <div className="outlines">
        {
          type === "work"
            ? <React.Fragment>
              <Outline />
              <Outline />
            </React.Fragment>
            : <React.Fragment>
              <Project />
              <Project />
            </React.Fragment>
        }
      </div>
    </div>
  )
}