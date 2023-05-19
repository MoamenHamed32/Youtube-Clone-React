/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ShortsCards(props) {
  return (
    <div className='shorts-card'>
        <a href="#" className='short-img'><img src={props.img} alt="" /></a>
        <div className="card-info">
            <div className="desc">
            <a href="#" className='title'><h2>{props.title}</h2></a>
            <a href="#" className='views'><span>{props.views}</span></a>
            </div>
            <a href="#" className='more'><i className="fa-solid fa-ellipsis-vertical"></i></a>
        </div>
      
    </div>
  )
}
