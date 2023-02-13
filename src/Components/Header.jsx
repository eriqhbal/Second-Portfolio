import React from 'react'

// React-Router-DOM
import {Link} from 'react-router-dom';

// Data
import {menu} from '../Data/data'

const Header = () => {
   return (
      <div>
         <header>
            <ul className='menu'>
               {menu.map(item => {
                  return <li key={item.id}>
                     <Link to={item.url} onClick={() => {}} classname="link">
                        <span>{item.icon}</span>
                     </Link>
                     
                  </li>
               })}
            </ul>
         </header>
      </div>
   )
}

export default Header