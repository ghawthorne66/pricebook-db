import React from 'react'
import { Link } from "react-router-dom";
import "../../css/nav.module.css"

function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link to="/">
        <h3>Logo</h3>
        </Link>
        <ul className="links">
          <Link to='/about'>
          <li>About</li>
          </Link>
          <Link to='/shop'>
          <li> Shop</li>
          </Link>
          <Link to='/native'>
          <li>Native</li>
          </Link>
          <Link to='page2'>
          <li>Page 2</li>
          </Link>
          <Link to='/page3'>
          <li>Page 3</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav


// {links.map((item, index) => {
//   return (
//     <li key={index}>
//       <Link fade to={item.path}>
//         {item.text}
//       </Link>
//     </li>
//   )
//  })}