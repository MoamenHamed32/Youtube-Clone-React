/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'


export default function Card(props) {
  return (
    <div className="card">
      <div className="card-container">
      <a href="#" className="thumbnail"><img  src={props.thumbnail} alt="" /></a>
      <div className="card-info">
        <a className="channel-img" href="#"><img  src={props.pageImg} alt="" /></a>
        <div className="card-desc">
<a className="title" href="#"><h2 >{props.title}</h2></a>
<div className="channel">
<a className="channel-name" href=""><span >{props.pageName}</span></a>
</div>
<a className="views" href="#"><span >{props.views}</span></a>
        </div>
        <a className="more-btn" href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
      </div>
      </div>
    </div>
  )
}
