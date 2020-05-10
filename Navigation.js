
import React from 'react';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import './navi.css';
 const Navigation=({signed})=>{

return(<nav  style={{display:"flex",justifyContent:"flex-end" ,height:"fit-content"}} className="h1"
	>
 
<div onClick={()=>signed('signin')} className="pa4 h1 navigation link dim black shadow-2 shadow-2-m shadow-2-l shadow-2-ns  black bg-animate " style={{color:"white"}}> Sign out</div>
</nav>
 );}
 export default Navigation;