import React from 'react';


export default function Outline({ head, place, shortDetail, details }) {
  return (
    <div className="outline">
      <h4 className="head">{head}</h4>
      <p>{place}</p>
      <p className="fade">
        {shortDetail}
      </p>
      <p className="details">
        {details}
      </p>
    </div>
  )
}