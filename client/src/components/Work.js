import React from 'react';
import Outline from './Outline';
import Project from './Project';

import db from "../litedb.json";


export default function Work({ type, topLiner, bottomLiner }) {
  return (
    <div className="tab-common work" id={type}>
      <div style={{marginTop: topLiner ? 30 : ''}}>
        <h2 style={{ marginTop: 0 }}>
          {db[type].title.split(' ')[0]}
          <br />
          {db[type].title.split(' ')[1]}
        </h2>
      </div>
      <div className="outlines">
        <React.Fragment>
          {
            topLiner
            && <hr className="fade" style={{marginBottom: 30}} />
          }
          {
            type === "work" || type === "education"
              ? db[type].data.map((item, index) => (
                <Outline
                  key={index}
                  head={item.head}
                  place={item.place}
                  shortDetail={item.shortDetail}
                  details={item.details}
                />
              ))
              : db.projects.data.map((item, index) => (
                <Project
                  key={index}
                  head={item.head}
                  github={item.github}
                  live={item.live}
                  details={item.details}
                />
              ))
          }
          {
            bottomLiner
            && <hr className="fade" />
          }
        </React.Fragment>
      </div>
    </div>
  )
}