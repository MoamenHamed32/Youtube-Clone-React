/* eslint-disable no-unused-vars */
import React from 'react'

export default function Sidebar() {
  return (
    <aside>
      <ul>
        <li><a href="#"><img className="home" src="/src/imgs/home-active.png" alt="" /><span>Home</span></a></li>
        <li><a href="#"><img className="shorts" src="/src/imgs/shorts.png" alt="" /><span>Shorts</span></a></li>
        <li><a href="#"><img className="subs" src="/src/imgs/subs.png" alt="" /><span>Subscriptions</span></a></li>
        <li><a href="#"><img className="liberary" src="/src/imgs/liberary.png" alt="" /><span>Library</span></a></li>
        <li><a href="#"><img className="downloads" src="/src/imgs/downloads.png" alt="" /><span>Downloads</span></a></li>
      </ul>
    </aside>
  )
}
