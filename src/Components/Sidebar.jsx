import React from 'react'

// Images
import  Profil  from '../Assets/Images/Profil.png'

const Sidebar = () => {
   return (
      <div>
         <section className='sideContent'>
            <div className='sideContent-top'>
               <div className='sideContent-top-image'>
                  <img style={{width: "10em"}} src={Profil} alt="/main-image" />
               </div>
            </div>
         </section>
      </div>
   )
}

export default Sidebar