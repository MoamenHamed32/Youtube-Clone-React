/* eslint-disable no-unused-vars */
import React from 'react'
import ShortsCards from './ShortsCards'
import vodsData from './vodsData'
export default function Shorts() {
    const shorts = vodsData.map(item => {
        return (
          <ShortsCards 
          key={item.id}
          img={item.thumbnail}
          title={item.title}
          views={item.views}
          official={item.official}
          />
        )
       })
  return (
    <div className="shorts-container">
        <div className="title">
            <div className="logo">
            <img src="/imgs/Youtube_shorts_icon.svg.png" alt="" />
            <span>Shorts</span>
            </div>
            <a href="#" className="not-interested"><i className="fa-solid fa-xmark fa-lg"></i></a>
        </div>
            <div className="shorts-cards">
                {shorts}
            </div>
            <div className="more-btn">
            <a className="more" href="#"><i className="fa-solid fa-angle-down"></i></a>
            </div>
      
    </div>
  )
}
