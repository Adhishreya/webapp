import Tilt from 'react-tilt';
import tachyons from 'tachyons';
import React from 'react';
import brain from './brain.png';	
const Logo=()=>{
	return(
<Tilt className="Tilt pa5  ma3" options={{ max : 25 }} style={{background:" linear-gradient(90deg, blue, pink)", height: "10vh", width: 200,marginTop:0 }} >
  <img  className="Tilt-inner top--1 mb7-l" style={{width:150,  objectFit: "center"}}
 src={"https://img.icons8.com/pastel-glyph/80/000000/brain.png"}/>
</Tilt>
		)
	;
}
export default Logo;