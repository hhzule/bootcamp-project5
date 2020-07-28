import React from 'react';
import Slide from 'react-reveal/Slide';
import style from './nav.module.css';
import Tilt from 'react-tilt';


function Header(){
   
    return(

        <>
         <Tilt className="Tilt" options={{ max : 2 }}  >
 <div className="Tilt-inner">  <div className={style.nav}>
        <div className={style.navtext}>
        
    
       
      </div>
    </div> </div>
</Tilt>
<h1>
         <Tilt className="Tilt" options={{ max : 2 }}  >
 <div className="Tilt-inner">
        <Slide left cascade>
        <div className={style.title}>  ENCODE</div>
        </Slide></div>
</Tilt>
      </h1>
        
        </>
    );
}

export default Header;