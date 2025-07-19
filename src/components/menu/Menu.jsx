// import React from 'react'
import './menu.scss'
export default function Menu(props) {
  return (
    <div className={'menu '+ (props.menuOpen && 'active')}>
        <ul>
            <li onClick={()=>props.setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfolio" onClick={()=>props.setMenuOpen(false)}>Portfolios</a>
            </li>
            <li>
                <a href="#works" onClick={()=>props.setMenuOpen(false)}>Works</a>
            </li>
            <li>
                <a href="#testimonials" onClick={()=>props.setMenuOpen(false)}>Testimonials</a>
            </li>
            <li>
                <a href="#contact" onClick={()=>props.setMenuOpen(false)}>Contact</a>
            </li>
        </ul>
    </div>
  )
}
