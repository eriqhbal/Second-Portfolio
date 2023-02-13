import React from 'react';

// Icons
import { AiFillFileText } from 'react-icons/ai';

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
                  <button type="" className='button'>
                     <div>
                        <span>{<AiFillFileText/>}</span>
                        <span className='span-resume'>RESUME</span>
                     </div>
                     
                  </button>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Sidebar