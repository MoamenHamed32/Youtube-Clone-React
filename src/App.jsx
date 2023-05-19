
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Shorts from './Components/Shorts'
import Sidebar from './Components/Sidebar'
import data from './Components/data'
import Menu from './Components/Menu'
import $ from 'jquery'
function App() {
  const [click, setClick] = useState(0)
  const cards = data.map(item => {
    return (
    <Card 
    key={item.id}
    thumbnail={item.thumbnail}
    title={item.title}
    pageName={item.pageName}
    views={item.views}
    pageImg={item.pageImg}
    official={item.official} />
    )
  })
  let menu = document.querySelector(".menu-container")
  let overlay = document.querySelector(".overlay")
  let container = document.querySelector("#container")
  let body = document.querySelector("body")
  function menuClickHandle(e) {
    e.preventDefault();
    setClick(prev => {
      prev++
    })
overlay.style.display = "block"
container.style.height = "81%"
container.style.overflowY = "hidden"



console.log(menu.style.display)
if ($(window).width() < 1200 && $(window).width() > 871) {
  $(menu).animate({
    width: "27%"
  })
}
else if ($(window).width() < 870 && $(window).width() > 768) {
  $(menu).animate({
    width: "28%"
  })
}
else if ($(window).width() < 767) {
  $(menu).animate({
    width: "80%"
  })
}
else {
  $(menu).animate({
    width: "18%"
  })
}
  }

  function menuRemove(e) {
    e.preventDefault();
    setClick(prev => {
      prev++
    })
    $(menu).animate({
      width: "0"
    })
    overlay.style.display = "none"
    container.style.height = "fit-content"
    container.style.overflowY = "visible"
    
  }


  return (
    <>
    <div className="overlay" onClick={menuRemove}></div>
      <Header clickHandle={menuClickHandle}/>
      <Nav />  
      <Sidebar />  
      <div id="container">
        {cards}
        <Shorts/>
      </div>
      <Menu menuRemove={menuRemove}/>  
    </>
  )
}

export default App
