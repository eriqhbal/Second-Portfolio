import React, {useState} from 'react'

// React-Router-DOM
import {Link} from 'react-router-dom';

// Data
import {menu} from '../Data/data'

// icons
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
   const [mobile, setMobile] = useState(false);
   return (
      <div>
         <header>
            <ul className={`${mobile ? `nav-menu` : `menu`}`}>
               {menu.map(item => {
                  return <li key={item.id}>
                     <Link to={item.url} onClick={() => {}} classname="link">
                        <p>{item.text}</p>
                        <span>{item.icon}</span>
                     </Link>
                     
                  </li>
               })}
            </ul>
            <div className='icons'>
               <button onClick={() => setMobile(!mobile)}>
                  {mobile ? <AiOutlineClose/> : <RiMenu3Line/>}
               </button>
            </div>
         </header>
      </div>
   )
}

export default Header