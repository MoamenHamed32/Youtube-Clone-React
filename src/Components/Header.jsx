/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Header(props) {

  return (
    <header>
      <div className="header-container">
        <div className="left-section">
            <div className="bars-container" onClick={props.clickHandle}>
        <a href="#" className="bars">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </a>
        </div>
        <a href="#"><img className="logo" src="src/imgs/youtube-logo.png" alt="" /></a>
        </div>
        <div className="mid-section">
          <div className="search-container">
            <input type="text" placeholder="Search"/>
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
            </div>
            <a href="#" className="voice-search icons"><i className="fa-solid fa-microphone"></i></a>
        </div>
        <div className="right-section">
            <a href="#" className="add-video icons" ><i className="fa-solid fa-video fa-lg"></i></a>
            <a href="#" className="notifications-bell icons bell"><i className="fa-regular fa-bell fa-lg"></i> <span className="notifications">9+</span></a>
            <a href="#" className="profile-pic"><img src="src/imgs/unnamed.jpg" alt="" /></a>
        </div>
      </div>
    </header>
  )
}
