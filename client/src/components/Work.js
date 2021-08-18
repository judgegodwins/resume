import React from 'react';
import Outline from './Outline';
import Project from './Project';

import db from "../litedb.json";


export default function Work({ type }) {
  return (
    <div className="tab-common work" id={type}>
      <div>
        <h2 style={{marginTop: 0}}>
          {db[type].title.split(' ')[0]}
          <br />
          {db[type].title.split(' ')[1]}
        </h2>
      </div>
      <div className="outlines">
        {
          type === "work" || type === "education"
            ? db[type].data.map(item => (
              <Outline
                head={item.head}
                place={item.place}
                shortDetail={item.shortDetail}
                details={item.details}
              />
            ))
            : db.projects.data.map(item => (
              <Project
                head={item.head}
                github={item.github}
                live={item.live}
                details={item.details}
              />
            ))
        }
      </div>
    </div>
  )
}