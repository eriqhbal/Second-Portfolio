import React from 'react';

// Icons
import { FiDownloadCloud } from 'react-icons/fi';
import { RiMoneyCnyCircleLine } from 'react-icons/ri';

// Images
import Profil from '../Assets/Images/Profil.png'

// Data
import { socialIcon, side } from '../Data/data';

const Progress = ({ title, done, back }) => {
   return (
      <div className='progress'>
         <div className='progress-title'>
            <h4>{title}</h4>
         </div>
         <div className='progress-num'>
            <h4>value : {done}.</h4>
         </div>
      </div>
   )
}

const Sidebar = () => {
   return (
      <div>
         <section className='sideContent'>
            <div className='sideContent-top'>
               <div className='sideContent-top-image'>
                  <img style={{ width: "10em", }} src={Profil} alt="/main-image" />
                  <div className="sideContent-top-image-name">
                     <h3>Zuleriqhbal Hendri</h3>
                     <span>Junior Developer</span>
                  </div>
               </div>
               <div className="sideContent-top-social">
                  {socialIcon.map((item, index) => (
                     <div key={index} className={item.class}>
                        <span>{item.icon}</span>
                     </div>
                  ))}
               </div>
               <div className="sideContent-bottom">
                  <div className="sideContent-bottom-skill">
                     {side.map(item => {
                        return <div key={item.id} className='sideContent-Skills'>
                           <Progress title={item.text} done={item.num} back={item.text} />
                        </div>
                     })}
                  </div>
               </div>
               <div className="sideContent-bottom-buttonGroup">
                  <button type="" className='sm-button'>
                     <span>
                        <FiDownloadCloud className="button_bicon" />
                     </span>
                  </button>
                  <button type="" className='button'>
                     <span>
                        <RiMoneyCnyCircleLine className="button_bicon" />
                        <span>HIRE ME</span>
                     </span>
                  </button>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Sidebar