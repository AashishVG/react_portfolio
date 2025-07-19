// import React from 'react'
import './topbar.scss';
import {Person,Mail} from "@material-ui/icons";

export default function Topbar(props) {
  return (
    <div className={'topbar '+(props.menuOpen && "active")} id='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
          <div className="itemContainer">
            <Person className='icon'></Person>
            <span>+91 7276432560</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'></Mail>
            <span>gupta.ashish459@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{props.setMenuOpen(!props.menuOpen)}}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
