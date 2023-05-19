/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Menu(props) {
  return (
    <div className='menu-container'>
      <div className="logo-section">
            <div className="bars-container" onClick={props.menuRemove}>
        <a href="#" className="bars">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </a>
        </div>
        <a href="#"><img className="logo" src="src/imgs/youtube-logo.png" alt="" /></a>
        </div>
        <nav className='menu-nav'>
            <div className="first section">
                
                <ul>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/home-active.png" alt="" />Home</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/shorts.png" alt="" />Shorts</a></li>
                <li><a href="#"><img className='subs' src="/src/imgs/sideNavIcons/subs.png" alt="" />Subscriptions</a></li>
                </ul>
            </div>
            <div className="second section">
            
            <ul>
                <li><a href="#"><img className='library' src="/src/imgs/sideNavIcons/liberary.png" alt="" />Library</a></li>
                <li><a href="#"><img className='history' src="/src/imgs/sideNavIcons/history.png" alt="" />History</a></li>
                <li><a href="#"><img className='your-vids' src="/src/imgs/sideNavIcons/your-vids.png" alt="" />Your videos</a></li>
                <li><a href="#"><img className='watch' src="/src/imgs/sideNavIcons/watch-later.png" alt="" />Watch later</a></li>
                <li><a href="#"><img className='downloads' src="/src/imgs/sideNavIcons/downloads.png" alt="" />Downloads</a></li>
                <li><a href="#"><img className='playlist' src="/src/imgs/sideNavIcons/web-devolopment.png" alt="" />Web Devolopment</a></li>
                <li><a href="#"><i  className="downarrow fa-solid fa-angle-down"></i>Show more</a></li>
                </ul>
            </div>
            <div className="third section">
            <h3 className='title'>Subscriptions</h3>
            <ul>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/elzero-channel.jpg" alt="" /><span>Elzero Web School</span></a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/channels4_profile.jpg" alt="" /><span>Awakening Music</span></a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/channels4_profile (1).jpg" alt="" /><span>Trap Nation</span></a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/channels4_profile (2).jpg" alt="" /><span>Mande</span></a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/unnamed.jpg" alt="" /><span>Valorant - Protato... </span></a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/channels4_profile (3).jpg" alt="" /><span>Clash of Clans</span></a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/channels4_profile (4).jpg" alt="" /><span>New Media Academy</span></a></li>
                <li><a href="#"><i className="fa-solid fa-angle-down"></i><span>Show 111 more</span></a></li>
                </ul>
            </div>
            <div className="forth section">
            <h3 className='title'></h3>
            <ul>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/trending.png" alt="" />Trending</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/music.png" alt="" />Music</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/live.png" alt="" />Live</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/gaming.png" alt="" />Gaming</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/sports.png" alt="" />Sports</a></li>
               
                </ul>
            </div>
            <div className="fifth section">
            <h3 className='title'>Explore</h3>
            <ul>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/youtube.png" alt="" />YouTube Premium</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/youtube-studio.png" alt="" />YouTube Studio</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/youtube-music.png" alt="" />YoutTube Music</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/youtube-kids.png" alt="" />YouTube Kids</a></li>
                
               
                </ul>
            </div>
            <div className="sixth section">
            
            <ul>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/settings.png" alt="" />Settings</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/report.png" alt="" />Report history</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/halp.png" alt="" />Help</a></li>
                <li><a href="#"><img src="/src/imgs/sideNavIcons/feedback.png" alt="" />Send feedback</a></li>
                
               
                </ul>
            </div>
        
        <div className='footer section'>
<p>About &nbsp;  Press &nbsp; Copyright <br /> Contact us &nbsp; Creators <br /> Advertise &nbsp; Devolopers</p>
        
        <p>Terms &nbsp; Privacy &nbsp; Ploicy & Saftey <br />How YouTube works <br />Test new features</p>

        <span>© 2023 Google LLC</span>
        
        </div>
        </nav>
    </div>
  )
}
